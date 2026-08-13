import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import MobileSection from "@/components/MobileSection";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="grow">
        <HeroSection />
        <MobileSection />
        <Services />
      </main>

      <Footer />
    </div>
  );
}
