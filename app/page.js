import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBrands from "./components/TrustedBrands";
import DrivingImpact from "./components/DrivingImpact";
import ReelShowcase from "./components/ReelShowcase";
import Services from "./components/Services";
import VideoTestimonials from "./components/VideoTestimonials";
import MediaFeatured from "./components/MediaFeatured";
import FoundersSection from "./components/FoundersSection";
import InquiryForm from "./components/InquiryForm";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <DrivingImpact />
      <ReelShowcase />
      <Services />
      <VideoTestimonials />
      <MediaFeatured />
      <FoundersSection />
      <InquiryForm />
      <FaqSection />
      <Footer />
    </main>
  );
}
