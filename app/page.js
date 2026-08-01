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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1E293B] flex flex-col font-sans">
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
