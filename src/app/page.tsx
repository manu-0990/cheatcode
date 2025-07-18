import Navigation from "@/components/landing/navigation";
import HeroSection from "@/components/landing/hero-section";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  )
}
