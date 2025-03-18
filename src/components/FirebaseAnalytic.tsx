"use client";

import { useEffect } from "react";
import { analytics } from "../lib/firebase"; // Import Firebase Analytics
import { logEvent } from "firebase/analytics";

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view"); // Track page views
    }
  }, []);

  return null; // This component doesn't render anything, just tracks events
}
