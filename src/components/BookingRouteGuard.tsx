"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBookingState } from "@/lib/bookingStore";

interface BookingRouteGuardProps {
  children: React.ReactNode;
}

/**
 * Checks sessionStorage for booking state.
 * If no state found, redirects to `/` (homepage).
 * Prevents users from landing directly on /qualify without filling the form.
 */
export function BookingRouteGuard({ children }: BookingRouteGuardProps) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const state = getBookingState();
    if (!state || !state.identity?.firstName) {
      router.replace("/");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) return null;

  return <>{children}</>;
}
