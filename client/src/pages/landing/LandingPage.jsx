import Navbar from "../../components/common/Navbar";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <HeroSection />
    </div>
  );
}