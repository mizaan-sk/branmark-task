import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Analytics from "./components/Analytics";
import ApolloTracker from "./components/ApolloTracker";
import JsonLd from "./components/JsonLd";
import { SITE_URL, organizationJsonLd, pageMetadata } from "./lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "Rivreach | Ads, Video & AI SEO Agency in Navi Mumbai",
    description:
      "Rivreach runs Meta and Google ads, produces scroll-stopping video creative and helps brands show up in AI search. Based in Navi Mumbai, serving India.",
    path: "/",
  }),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans bg-white text-black min-h-full flex flex-col selection:bg-[#FF5914] selection:text-white overflow-x-hidden">
        <JsonLd data={organizationJsonLd} />
        <Analytics />
        <ApolloTracker />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
