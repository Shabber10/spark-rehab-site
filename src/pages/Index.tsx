import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductSection from "@/components/ProductSection";
import UseCasesSection from "@/components/UseCasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ProductSection />
      <UseCasesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
