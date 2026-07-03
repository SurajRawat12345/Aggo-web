import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import ProductShowcase from "@/components/product-showcase";
import ImageGallery from "@/components/Image-galary";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <ProductShowcase />
        <ImageGallery />
      </main>

      <Footer />
    </div>
  );
}
