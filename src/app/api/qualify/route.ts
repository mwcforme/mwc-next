import { NextResponse } from "next/server";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

// ── Sanitize ──
function sanitize(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.replace(/<[^>]*>/g, "").replace(/[\\'";]/g, "").trim();
}

// ── Rate limiter (per-instance) ──
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 20;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, e] of hits) if (now > e.resetAt) hits.delete(ip);
}, RATE_WINDOW_MS * 2);

// ── Location → GHL tag mapping ──
const LOC_TAGS: Record<string, string> = {
  richmond: "Richmond, VA",
  "virginia-beach": "Virginia Beach, VA",
  "newport-news": "Newport News, VA",
};

export async function POST(request: Request) {
  // Rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) {
    return NextResponse.json({ error: "GHL credentials not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { firstName, lastName, phone, location, source, ...utmRaw } = body as Record<string, unknown>;
  const fName = sanitize(firstName);
  const lName = sanitize(lastName);
  const ph = sanitize(phone);
  const loc = sanitize(location);
  const src = sanitize(source) || "next-lander";

  // Validate
  if (!fName || fName.length < 2) return NextResponse.json({ error: "Name is required." }, { status: 400 });
  const digits = ph.replace(/\D/g, "");
  if (digits.length !== 10) return NextResponse.json({ error: "Valid 10-digit phone required." }, { status: 400 });
  if (!loc || !LOC_TAGS[loc]) return NextResponse.json({ error: "Valid location required." }, { status: 400 });

  // Format phone to E.164
  const e164 = "+1" + digits;

  // Build custom fields
  const customFields: Array<{ id: string; fieldValue: string }> = [
    { id: "Cou856tOhaxW62vwehVI", fieldValue: LOC_TAGS[loc]! },
    { id: "ZQxFKlpEMOCYI8W0wMDl", fieldValue: src },
    { id: "RrRyWKMSzZvu6MFGXTZb", fieldValue: ip },
    { id: "qEeJTkIyz1GMVOfhIuhp", fieldValue: ip },
  ];

  // UTM fields
  const utmFieldMap: Record<string, string> = {
    utm_campaign: "Vh0MH504ujQfBh0Q5UFx",
    utm_medium: "ssEvmmfe1tz5H4fiMHZR",
    utm_content: "thwe93MxRDzS2SO9pxxC",
    gclid: "1Wo5z9YpDh9Lv64IBEoa",
    fbclid: "1Wo5z9YpDh9Lv64IBEoa",
    msclkid: "1Wo5z9YpDh9Lv64IBEoa",
  };
  for (const [key, ghlId] of Object.entries(utmFieldMap)) {
    const val = sanitize(utmRaw[key]);
    if (val) customFields.push({ id: ghlId, fieldValue: val });
  }

  // Traffic source label
  const utmSource = sanitize(utmRaw.utm_source);
  if (utmSource) {
    const s = utmSource.toLowerCase();
    let trafficLabel = utmSource;
    if (s.includes("facebook") || s.includes("fb")) trafficLabel = "Facebook";
    else if (s.includes("google")) trafficLabel = "Google";
    else if (s.includes("bing") || s.includes("microsoft")) trafficLabel = "Bing";
    customFields.push({ id: "Np2WHxON2I4DVnYjZh3e", fieldValue: trafficLabel });
  }

  // Landing page URL
  const lpUrl = sanitize(utmRaw.landing_page);
  if (lpUrl) customFields.push({ id: "UZBaHuKr9PpFNro47it7", fieldValue: lpUrl });

  const ghlBody = {
    locationId,
    firstName: fName,
    ...(lName ? { lastName: lName } : {}),
    phone: e164,
    source: src,
    tags: ["next-lander", LOC_TAGS[loc]!],
    customFields,
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    const upstream = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: GHL_API_VERSION,
      },
      body: JSON.stringify(ghlBody),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      console.error(JSON.stringify({ event: "ghl_error", status: upstream.status, data }));
      return NextResponse.json(
        { error: "Failed to create contact. Please try again." },
        { status: 502 }
      );
    }

    const contactId = (data as { contact?: { id?: string } })?.contact?.id;
    console.log(
      JSON.stringify({
        event: "lead_qualified",
        ip,
        phone: e164,
        location: loc,
        source: src,
        contactId,
        ts: new Date().toISOString(),
      })
    );

    return NextResponse.json({ ok: true, contactId, location: LOC_TAGS[loc] });
  } catch (err: unknown) {
    const error = err as { name?: string; message?: string };
    if (error.name === "AbortError") {
      return NextResponse.json({ error: "GHL request timed out." }, { status: 504 });
    }
    console.error(JSON.stringify({ event: "qualify_error", error: error.message }));
    return NextResponse.json({ error: "Internal error. Please try again." }, { status: 500 });
  }
}
