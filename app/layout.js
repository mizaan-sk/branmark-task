import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Rivreach | Performance Marketing & Digital Growth Agency",
  description: "Rivreach helps brands grow with performance marketing, paid media, lead generation, e-commerce campaigns, SEO, and conversion-focused creative.",
  keywords: [
    "performance marketing agency",
    "digital advertising agency",
    "paid media management",
    "Google Ads management",
    "Meta Ads management",
    "lead generation agency",
    "e-commerce marketing agency",
    "DTC growth marketing",
    "SEO services",
    "landing page optimization",
    "ad creative and video production",
    "Amazon Ads management",
    "brand awareness campaigns",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.svg" />

        {/* GSAP & ScrollTrigger CDN Libraries */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans bg-white text-black min-h-full flex flex-col selection:bg-[#FF5914] selection:text-white overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
