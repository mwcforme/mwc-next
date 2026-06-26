"use client";

import { useEffect, useState } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import { FunnelProgressBar } from "@/components/FunnelProgressBar";
import { getBookingState } from "@/lib/bookingStore";

const ORANGE = "#E8670A";
const NAVY = "#0B1029";
const WHITE = "#FFFFFF";
const OSWALD = "Oswald, 'Arial Narrow', sans-serif";
const INTER = "Inter, system-ui, sans-serif";
const TIMEZONE = "America/New_York";

const LOCATION_ADDRESSES: Record<string, { address: string; phone: string; mapsUrl: string }> = {
  richmond: {
    address: "7001 Forest Ave Suite 302, Richmond, VA 23229",
    phone: "804-346-4636",
    mapsUrl: "https://maps.google.com/?q=7001+Forest+Ave+Suite+302+Richmond+VA+23229",
  },
  "virginia-beach": {
    address: "1620 Laskin Rd Suite 106, Virginia Beach, VA 23451",
    phone: "757-612-4428",
    mapsUrl: "https://maps.google.com/?q=1620+Laskin+Rd+Suite+106+Virginia+Beach+VA+23451",
  },
  "newport-news": {
    address: "12200 Warwick Blvd Suite 10, Newport News, VA 23606",
    phone: "757-806-6263",
    mapsUrl: "https://maps.google.com/?q=12200+Warwick+Blvd+Suite+10+Newport+News+VA+23606",
  },
};

function formatApptDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: TIMEZONE,
  });
}

function formatApptTime(iso: string): string {
  return new Date(iso)
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: TIMEZONE,
    })
    .replace(/\u202f/g, " ");
}

export default function ConfirmedPage() {
  const [ready, setReady] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [slotIso, setSlotIso] = useState("");
  const [location, setLocation] = useState("richmond");
  const [locationLabel, setLocationLabel] = useState("Richmond");

  useEffect(() => {
    const state = getBookingState();
    if (state) {
      setFirstName(state.identity?.firstName ?? "");
      // @ts-expect-error confirmedAppointment is patched in by schedule page
      const appt = state.confirmedAppointment as {
        slotIso?: string;
        location?: string;
        locationLabel?: string;
      } | undefined;
      if (appt?.slotIso) setSlotIso(appt.slotIso);
      if (appt?.location) setLocation(appt.location);
      if (appt?.locationLabel) setLocationLabel(appt.locationLabel);
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  const locInfo = LOCATION_ADDRESSES[location] ?? LOCATION_ADDRESSES["richmond"];
  const dateStr = slotIso ? formatApptDate(slotIso) : "";
  const timeStr = slotIso ? formatApptTime(slotIso) : "";

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 640,
        padding: "0 20px 60px",
      }}
    >
      {/* Progress bar — step 4 = all complete */}
      <div style={{ marginBottom: 8 }}>
        <FunnelProgressBar activeStep={4} />
      </div>

      {/* Green checkmark */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(34,197,94,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckCircle size={44} color="#16A34A" strokeWidth={2} />
        </div>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: OSWALD,
          fontSize: 26,
          fontWeight: 700,
          color: NAVY,
          textAlign: "center",
          margin: "0 0 8px",
          lineHeight: 1.2,
        }}
      >
        {firstName ? `You're all set, ${firstName}!` : "You're all set!"}
      </h1>

      <p
        style={{
          fontFamily: INTER,
          fontSize: 15,
          color: "rgba(11,16,41,0.6)",
          textAlign: "center",
          margin: "0 0 28px",
          lineHeight: 1.5,
        }}
      >
        We&rsquo;ll send a confirmation to your phone.
      </p>

      {/* Appointment details card */}
      {(dateStr || locationLabel) && (
        <div
          style={{
            background: WHITE,
            borderRadius: 16,
            border: "1px solid rgba(11,16,41,0.10)",
            overflow: "hidden",
            marginBottom: 20,
            boxShadow: "0 2px 12px rgba(11,16,41,0.08)",
          }}
        >
          {/* Date/time row */}
          {dateStr && (
            <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(11,16,41,0.08)" }}>
              <p
                style={{
                  fontFamily: OSWALD,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  color: ORANGE,
                  margin: "0 0 4px",
                }}
              >
                Appointment
              </p>
              <p style={{ fontFamily: OSWALD, fontSize: 17, fontWeight: 700, color: NAVY, margin: "0 0 2px" }}>
                {dateStr}
              </p>
              <p style={{ fontFamily: INTER, fontSize: 15, color: "rgba(11,16,41,0.65)", margin: 0 }}>
                {timeStr} · 60 min visit
              </p>
            </div>
          )}

          {/* Location row */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 20px" }}>
            <MapPin size={18} color={ORANGE} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: OSWALD,
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: NAVY,
                  margin: "0 0 3px",
                }}
              >
                Men&rsquo;s Wellness Centers · {locationLabel}
              </p>
              <p style={{ fontFamily: INTER, fontSize: 13, color: "rgba(11,16,41,0.6)", margin: "0 0 6px", lineHeight: 1.5 }}>
                {locInfo.address}
              </p>
              <a
                href={locInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: INTER,
                  fontSize: 13,
                  fontWeight: 600,
                  color: ORANGE,
                  textDecoration: "none",
                }}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* What to expect */}
      <div
        style={{
          background: "rgba(232,103,10,0.06)",
          border: "1px solid rgba(232,103,10,0.18)",
          borderRadius: 12,
          padding: "14px 18px",
          marginBottom: 24,
        }}
      >
        <p
          style={{
            fontFamily: OSWALD,
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: ORANGE,
            margin: "0 0 6px",
          }}
        >
          What to expect
        </p>
        <ul
          style={{
            fontFamily: INTER,
            fontSize: 14,
            color: "rgba(11,16,41,0.75)",
            margin: 0,
            paddingLeft: 18,
            lineHeight: 1.7,
          }}
        >
          <li>Arrive 5 minutes early</li>
          <li>Bring a valid ID</li>
          <li>Your no-cost visit takes about 30-45 minutes</li>
          <li>A licensed physician will review your labs on-site</li>
        </ul>
      </div>

      {/* Contact number */}
      <p
        style={{
          fontFamily: INTER,
          fontSize: 13,
          color: "rgba(11,16,41,0.45)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Questions? Call{" "}
        <a href={`tel:+1${locInfo.phone.replace(/\D/g, "")}`} style={{ color: NAVY, fontWeight: 600 }}>
          {locInfo.phone}
        </a>
      </p>
    </div>
  );
}
