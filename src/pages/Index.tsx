
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProposalSlider from "@/components/ProposalSlider";
import CompanyProfile from "@/components/CompanyProfile";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClosingSection from "@/components/ClosingSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProposalSlider />
      <CompanyProfile />
      <ServicesSection />
      <PortfolioSection />
      <ClosingSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
