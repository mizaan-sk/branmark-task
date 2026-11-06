import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBrands from "./components/TrustedBrands";
import ClientResults from "./components/ClientResults";
import ReelShowcase from "./components/ReelShowcase";
import PlatformExpertise from "./components/PlatformExpertise";
import Services from "./components/Services";
import FaqSection from "./components/FaqSection";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { faqJsonLd } from "./data/faqs";
import { pageMetadata } from "./lib/site";

export const metadata = pageMetadata({
  title: "Rivreach | Ads, Video & AI SEO Agency in Navi Mumbai",
  description:
    "Rivreach runs Meta and Google ads, produces scroll-stopping video creative and helps brands show up in AI search. Based in Navi Mumbai, serving India.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1E293B] flex flex-col font-sans">
      <JsonLd data={faqJsonLd} />
      <Navbar />
      <Hero />
      <TrustedBrands />
      <ClientResults />
      <ReelShowcase />
      <PlatformExpertise />
      <Services />
      <FaqSection />
      <InquiryForm />
      <Footer />
    </main>
  );
}
