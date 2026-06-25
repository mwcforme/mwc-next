import type { Metadata } from "next";
import { Oswald, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Men's Wellness Centers | TRT, ED & Weight Loss in Virginia",
  description:
    "Provider-supervised testosterone replacement therapy at 3 Virginia locations. 60-minute in-person visit. Same-day labs. No insurance needed.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0B1029",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${montserrat.variable} ${inter.variable} antialiased overflow-x-hidden`}
        style={{ background: "#0B1029", color: "#F5F0EB", fontFamily: "'Montserrat', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
