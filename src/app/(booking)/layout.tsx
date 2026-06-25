import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Visit | Men's Wellness Centers",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: 64,
          background: "#0B1029",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <a
          href="https://menswellnesscenters.com"
          style={{
            fontFamily: "Oswald, 'Arial Narrow', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
          aria-label="Men's Wellness Centers"
        >
          MEN&apos;S WELLNESS CENTERS
        </a>

        {/* Phone */}
        <a
          href="tel:+18663444955"
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#FFFFFF",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          866-344-4955
        </a>
      </header>

      {/* Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </div>
  );
}
