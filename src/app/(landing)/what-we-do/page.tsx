import type { Metadata } from "next";
import {
  CheckCircle2,
  XCircle,
  Zap,
  Brain,
  Smile,
  Heart,
  Stethoscope,
  MapPin,
  Phone,
  Star,
  ArrowRight,
  Shield,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { HeroCTA } from "@/components/HeroCTA";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "What We Do - Men's Wellness Centers | TRT, ED & Weight Loss",
  description:
    "We specialize exclusively in testosterone therapy, erectile dysfunction, and medical weight loss. Physician-led. Virginia-based. We are NOT a general clinic. See if you're a good fit.",
};

/* ────────────────────────────────────────────────────────── */
/*  Content Constants                                         */
/* ────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: "Testosterone Therapy",
    description:
      "Physician-supervised evaluation and treatment for low testosterone with same-day labs and personalized protocols.",
    icon: Zap,
  },
  {
    title: "Sexual Health",
    description:
      "In-person evaluation and FDA-approved treatment options for erectile dysfunction and sexual performance.",
    icon: Heart,
  },
  {
    title: "Medical Weight Loss",
    description:
      "Physician-led, lab-guided weight loss with GLP-1 medications when clinically appropriate.",
    icon: Smile,
  },
];

const GOOD_FIT = [
  "Low energy or fatigue despite sleep",
  "Decreased sex drive or erectile concerns",
  "Weight that won't budge despite diet/exercise",
  "Your doctor said labs are 'normal' but you don't feel right",
  "You want a physician, not a coordinator or chatbot",
];

const NOT_FIT = [
  {
    label: "Urology services",
    desc: "Prostate exams, vasectomy, kidney stones",
  },
  {
    label: "Fertility/sperm analysis",
    desc: "Go to a board-certified reproductive urologist",
  },
  {
    label: "General medicine",
    desc: "Annual physicals, chronic disease management",
  },
  {
    label: "Telehealth only",
    desc: "We require in-person visits for labs and evaluation",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Book Online in Under 5 Minutes",
    description: "Pick your location and preferred time. No referral needed.",
  },
  {
    step: "2",
    title: "Same-Day Labs & Provider Review",
    description:
      "In-center lab draw. Results reviewed same visit by your Virginia-licensed provider.",
  },
  {
    step: "3",
    title: "Leave With Your Personal Plan",
    description:
      "A 60-minute evaluation. A treatment protocol when medically appropriate.",
  },
];

const OUTCOMES = [
  {
    icon: Zap,
    title: "Restored Energy",
    desc: "Consistent energy throughout the day",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    desc: "Improved focus and reduced brain fog",
  },
  {
    icon: Heart,
    title: "Better Mood",
    desc: "Reduced irritability, improved well-being",
  },
  {
    icon: Smile,
    title: "Physical Performance",
    desc: "Increased strength and faster recovery",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I've been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer.",
    name: "R.T.",
    location: "Richmond, VA",
    type: "TRT",
  },
  {
    quote:
      "Same-day labs changed everything. I walked in not knowing what was wrong and left with a real treatment plan the same day.",
    name: "D.M.",
    location: "Virginia Beach, VA",
    type: "ED",
  },
  {
    quote:
      "Within 6 weeks I felt like myself again. Energy is back. Focus is back. I only wish I'd found them sooner.",
    name: "J.K.",
    location: "Newport News, VA",
    type: "TRT",
  },
];

const LOCATIONS = [
  {
    city: "Richmond",
    address: "4050 Innslake Dr, Suite 360, Glen Allen, VA 23060",
    phone: "(804) 346-4636",
    driveTime: "5 min from I-64",
  },
  {
    city: "Virginia Beach",
    address: "996 First Colonial Road, Virginia Beach, VA 23454",
    phone: "(757) 612-4428",
    driveTime: "5 min from I-264",
  },
  {
    city: "Newport News",
    address: "827 Diligence Drive, Suite 206, Newport News, VA 23606",
    phone: "(757) 806-6263",
    driveTime: "3 min from I-64, Exit 258A",
  },
];

/* ────────────────────────────────────────────────────────── */
/*  Page Component                                            */
/* ────────────────────────────────────────────────────────── */

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* ──────────────────────────────────── */
      /* 1. HERO + FORM (Above Fold)         */
      /* ──────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Headline */}
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            We Specialize in One Thing: Men's Health
          </h1>

          {/* Subhead */}
          <p className="mb-6 text-lg text-slate-200 sm:text-xl">
            Testosterone therapy, erectile dysfunction, and medical weight loss.
            <strong className="block mt-2 text-white">
              NOT a general clinic. NOT mail-order. NOT telehealth.
            </strong>
          </p>

          {/* Service Pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1.5 text-sm font-medium text-blue-200"
              >
                <s.icon size={16} />
                {s.title}
              </div>
            ))}
          </div>

          {/* Proof */}
          <div className="mb-8 border-l-2 border-blue-500 pl-4">
            <p className="text-sm font-semibold text-blue-300">
              ✓ 11 years in Virginia
            </p>
            <p className="text-sm font-semibold text-blue-300">
              ✓ 10,000+ men treated
            </p>
            <p className="text-sm font-semibold text-blue-300">
              ✓ 4.9★ rating (191 verified reviews)
            </p>
          </div>

          {/* CTA Button */}
          <CtaButton
            label="Book Your No-Cost Consultation"
            href="/book"
            className="w-full sm:w-auto"
          />

          <p className="mt-4 text-center text-sm text-slate-300">
            60-minute in-person visit. Same-day labs. No obligation.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────── */
      /* 2. IS THIS A FIT FOR YOU?           */
      /* ──────────────────────────────────── */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Are You a Good Fit?
          </h2>

          {/* Good Fit (Left) */}
          <div className="mb-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-900 dark:text-green-200">
                <CheckCircle2 className="h-6 w-6" />
                You Might Be a Good Fit If:
              </h3>
              <ul className="space-y-3">
                {GOOD_FIT.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-green-800 dark:text-green-300"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit (Right) */}
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-900 dark:text-red-200">
                <XCircle className="h-6 w-6" />
                We're NOT the Right Fit If You Need:
              </h3>
              <ul className="space-y-3">
                {NOT_FIT.map((item) => (
                  <div key={item.label} className="text-sm">
                    <p className="font-semibold text-red-800 dark:text-red-300">
                      {item.label}
                    </p>
                    <p className="text-xs text-red-700 dark:text-red-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          {/* Clarification Block */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-900 dark:bg-blue-950">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
              We're specialists, not generalists. Our focus is <strong>TRT</strong>,{" "}
              <strong>ED</strong>, and <strong>weight loss</strong> — with
              physician-led in-person care.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── */
      /* 3. THIS IS ALL WE DO (3 Cards)      */
      /* ──────────────────────────────────── */}
      <section className="bg-white px-4 py-16 dark:bg-slate-900 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Our Three Specialties
          </h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-lg border border-slate-200 p-6 dark:border-slate-700"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                  <CtaButton
                    label="Learn More"
                    href="/book"
                    variant="outline"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── */
      /* 4. THE PROCESS (3 Steps)            */
      /* ──────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-16 dark:bg-slate-800 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Here's How It Works
          </h2>
          <p className="mb-12 text-center text-slate-600 dark:text-slate-400">
            In one 60-minute visit.
          </p>

          <div className="grid gap-8 sm:grid-cols-3">
            {PROCESS.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── */
      /* 5. WHAT TO EXPECT (Outcomes)        */
      /* ──────────────────────────────────── */}
      <section className="bg-white px-4 py-16 dark:bg-slate-900 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            What Our Members Experience
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {OUTCOMES.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <div key={outcome.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {outcome.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── */
      /* 6. TESTIMONIALS                     */
      /* ──────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-16 dark:bg-slate-800 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Real Men. Real Results.
          </h2>
          <p className="mb-12 text-center text-sm text-slate-600 dark:text-slate-400">
            Verified reviews from Google
          </p>

          <div className="grid gap-8 sm:grid-cols-3">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-slate-700 dark:text-slate-300">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {testimonial.location} • {testimonial.type}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/Men's+Wellness+Centers+Virginia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
            >
              Read all 191 verified reviews on Google
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── */
      /* 7. LOCATIONS (3 Centers)            */
      /* ──────────────────────────────────── */}
      <section className="bg-white px-4 py-16 dark:bg-slate-900 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Three Virginia Locations
          </h2>
          <p className="mb-12 text-center text-slate-600 dark:text-slate-400">
            Same-day appointments available at all centers
          </p>

          <div className="grid gap-8 sm:grid-cols-3">
            {LOCATIONS.map((location) => (
              <div
                key={location.city}
                className="rounded-lg border border-slate-200 p-6 dark:border-slate-700"
              >
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {location.city}
                </h3>
                <div className="mb-4 space-y-2 text-sm">
                  <p className="flex gap-2 text-slate-700 dark:text-slate-300">
                    <MapPin size={16} className="flex-shrink-0" />
                    {location.address}
                  </p>
                  <p className="flex gap-2 text-slate-700 dark:text-slate-300">
                    <Phone size={16} className="flex-shrink-0" />
                    <a href={`tel:${location.phone.replace(/\D/g, "")}`}>
                      {location.phone}
                    </a>
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {location.driveTime}
                  </p>
                </div>
                <CtaButton label="Book Visit" href="/book" variant="outline" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── */
      /* 8. FINAL CTA                        */
      /* ──────────────────────────────────── */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 px-4 py-16 text-white dark:from-blue-900 dark:to-blue-800 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Stop Accepting "Normal" When You Don't Feel Normal
          </h2>
          <p className="mb-8 text-lg text-blue-100 dark:text-blue-200">
            Your first visit is no-cost. On-site labs. Same-day results. No
            referral needed.
          </p>
          <CtaButton
            label="Book Your Consultation Today"
            href="/book"
            className="w-full sm:w-auto"
          />
          <p className="mt-6 text-sm text-blue-100 dark:text-blue-300">
            Confidential. No obligation. You'll hear back within one business
            hour.
          </p>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
