"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent } from "../lib/analytics";

// Loads only when NEXT_PUBLIC_GA_ID is set at build time.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function eventForLink(href) {
  if (href.startsWith("tel:")) return "click_phone";
  if (href.startsWith("mailto:")) return "click_email";
  if (href.includes("wa.me/")) return "click_whatsapp";
  if (/\.pdf($|\?)/i.test(href)) return "file_download";
  return null;
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return undefined;

    const onClick = (e) => {
      const href = e.target.closest?.("a")?.getAttribute("href");
      const name = href && eventForLink(href);
      if (name) trackEvent(name, { link_url: href });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
