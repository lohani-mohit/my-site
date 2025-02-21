"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;
    // Send pageview with a custom path
    window.gtag("event", "page_view", { page_path: url });
  }, [pathname, searchParams]);

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />;
}
