import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MWC Next.js Migration",
  description: "Men's Wellness Centers — book.menswellnesscenters.com",
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B1029",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Oswald, sans-serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 700,
          color: "#F5F0EB",
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          marginBottom: "16px",
          lineHeight: 1.1,
        }}
      >
        MWC{" "}
        <span style={{ color: "#E8670A" }}>Next.js</span>{" "}
        Migration
      </h1>
      <p
        style={{
          fontSize: "1rem",
          color: "rgba(245, 240, 235, 0.65)",
          marginBottom: "32px",
          maxWidth: "480px",
        }}
      >
        Men&apos;s Wellness Centers — book.menswellnesscenters.com
      </p>
      <div
        style={{
          display: "inline-block",
          padding: "8px 20px",
          border: "1px solid rgba(232, 103, 10, 0.4)",
          borderRadius: "999px",
          color: "#E8670A",
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Scaffold ready — migration in progress
      </div>
    </main>
  );
}
