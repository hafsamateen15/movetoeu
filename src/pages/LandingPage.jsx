import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ReferenceCards from "../components/ReferenceCards";
import CTASection from "../components/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ReferenceCards />
      <CTASection />
      <footer className="px-8 py-5 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
        <span className="font-medium text-blue-700">MoveToEU</span>
        <span>movetoeu.net · Hosted in Germany · GDPR compliant · Open source</span>
      </footer>
    </div>
  );
}
