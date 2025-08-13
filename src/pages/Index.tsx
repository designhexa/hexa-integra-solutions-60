import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CompanyProfile from "@/components/CompanyProfile";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Delay sedikit biar sectionnya sudah ter-render
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyProfile />
      <ServicesSection />
      <PortfolioSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
