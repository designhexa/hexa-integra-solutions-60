
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProposalSlider from "@/components/ProposalSlider";
import CompanyProfile from "@/components/CompanyProfile";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LoginAccess from "@/components/LoginAccess";

const Index = () => {
  const [isProposalUnlocked, setIsProposalUnlocked] = useState(false);

  const handleLoginSuccess = () => {
    setIsProposalUnlocked(true);
  };

  // Jika proposal belum di-unlock, tampilkan halaman login
  if (!isProposalUnlocked) {
    return <LoginAccess onLoginSuccess={handleLoginSuccess} />;
  }

  // Jika sudah login, tampilkan konten lengkap
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProposalSlider />
      <CompanyProfile />
      <ServicesSection />
      <PortfolioSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
