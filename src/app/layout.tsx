import type { Metadata } from "next";
import { Oswald, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Men's Wellness Centers | Low Testosterone Therapy in Virginia",
  description:
    "Provider-supervised testosterone replacement therapy at 3 Virginia locations. Testing and results reviewed in-visit. Walk in today.",
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
        style={{ background: "#0B1029" }}
      >
        {children}
      </body>
    </html>
  );
}
