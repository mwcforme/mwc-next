/**
 * CRO Landing Page — homepage at /
 * Matches live Vite site at book.menswellnesscenters.com
 * All hardcoded hex values (no CSS custom properties).
 */
import type { Metadata } from "next";
import { CROPage } from "@/components/CROPage";

export const metadata: Metadata = {
  title: "Men's Wellness Centers | TRT, ED & Weight Loss in Virginia",
  description:
    "Provider-supervised testosterone replacement therapy at 3 Virginia locations. 60-minute in-person visit. Same-day labs. No insurance needed.",
};

export default function HomePage() {
  return <CROPage />;
}
