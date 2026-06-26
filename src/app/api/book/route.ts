import { NextRequest, NextResponse } from "next/server";

const CALENDARS: Record<string, { calendarId: string; label: string }> = {
  richmond: { calendarId: "1Cfy5JnO2A4ggiZlMVvX", label: "Richmond" },
  "virginia-beach": { calendarId: "4xmnBGMWJ6TVUKcAPpPb", label: "Virginia Beach" },
  "newport-news": { calendarId: "lBaRbjUpEmesxEloFBME", label: "Newport News" },
};

export async function POST(req: NextRequest) {
  let body: {
    slotIso: string;
    location: string;
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    contactId?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { slotIso, location, firstName, lastName, email, phone, contactId } =
    body;

  if (!slotIso || !location || !firstName) {
    return NextResponse.json(
      { error: "slotIso, location, and firstName are required" },
      { status: 400 }
    );
  }

  const cal = CALENDARS[location];
  if (!cal) {
    return NextResponse.json({ error: "Invalid location" }, { status: 400 });
  }

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) {
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  try {
    const payload: Record<string, unknown> = {
      calendarId: cal.calendarId,
      locationId,
      startTime: slotIso,
      title: `Appointment - ${cal.label}`,
      appointmentStatus: "confirmed",
      toNotify: true,
    };

    // If we have a GHL contactId, attach it
    if (contactId) {
      payload.contactId = contactId;
    } else {
      // Create with first/last/email/phone inline — GHL will match or create contact
      payload.contact = {
        firstName,
        lastName: lastName || "",
        email: email || "",
        phone: phone || "",
      };
    }

    const res = await fetch(
      "https://services.leadconnectorhq.com/calendars/events/appointments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("GHL book error:", res.status, text);
      return NextResponse.json(
        { error: "Failed to create appointment", ghlStatus: res.status },
        { status: 502 }
      );
    }

    const data = await res.json();
    const appointmentId: string =
      data?.id ?? data?.appointment?.id ?? data?.appointmentId ?? "unknown";

    return NextResponse.json({ ok: true, appointmentId });
  } catch (err) {
    console.error("GHL book fetch error:", err);
    return NextResponse.json(
      { error: "Network error creating appointment" },
      { status: 502 }
    );
  }
}
