"use client";

import { Phone } from "lucide-react";
import { FunnelProgressBar } from "@/components/FunnelProgressBar";
import { BookingRouteGuard } from "@/components/BookingRouteGuard";

function ScheduleContent() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 640,
        padding: "0 20px 40px",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <FunnelProgressBar activeStep={3} />
      </div>

      <h1
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#0B1029",
          textAlign: "center",
          marginBottom: 12,
          lineHeight: 1.3,
        }}
      >
        Pick a time
      </h1>

      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: 15,
          color: "#374151",
          textAlign: "center",
          marginBottom: 32,
          lineHeight: 1.5,
        }}
      >
        Calendar integration coming soon. Call us now to book your no-cost
        visit — same-day appointments available.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="tel:+18663444955"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            width: "100%",
            maxWidth: 360,
            height: 56,
            background: "#E8670A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 9999,
            fontFamily: "Oswald, 'Arial Narrow', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(232,103,10,0.40)",
          }}
        >
          <Phone size={18} strokeWidth={2} />
          Call Now — 866-344-4955
        </a>
      </div>

      <p
        style={{
          marginTop: 20,
          fontSize: 13,
          color: "#9CA3AF",
          textAlign: "center",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        Mon–Fri 8am–6pm ET · Same-day slots available
      </p>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <BookingRouteGuard>
      <ScheduleContent />
    </BookingRouteGuard>
  );
}
