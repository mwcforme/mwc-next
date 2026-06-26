import { NextRequest, NextResponse } from "next/server";

const CALENDARS: Record<string, string> = {
  richmond: "1Cfy5JnO2A4ggiZlMVvX",
  "virginia-beach": "4xmnBGMWJ6TVUKcAPpPb",
  "newport-news": "lBaRbjUpEmesxEloFBME",
};

// Simple in-memory rate limiter: 10 req/min per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  const { searchParams } = req.nextUrl;
  const location = searchParams.get("location") ?? "";
  const startDate = searchParams.get("startDate") ?? "";
  const endDate = searchParams.get("endDate") ?? "";

  const calendarId = CALENDARS[location];
  if (!calendarId) {
    return NextResponse.json({ error: "Invalid location" }, { status: 400 });
  }
  if (!startDate || !endDate) {
    return NextResponse.json(
      { error: "startDate and endDate are required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  try {
    const url = new URL(
      `https://services.leadconnectorhq.com/calendars/${calendarId}/free-slots`
    );
    url.searchParams.set("startDate", startDate);
    url.searchParams.set("endDate", endDate);
    url.searchParams.set("timezone", "America/New_York");

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("GHL slots error:", res.status, text);
      return NextResponse.json(
        { error: "Failed to fetch slots", status: res.status },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("GHL slots fetch error:", err);
    return NextResponse.json(
      { error: "Network error fetching slots" },
      { status: 502 }
    );
  }
}
