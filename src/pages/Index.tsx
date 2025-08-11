
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProposalSection from "@/components/ProposalSection";
import InformationRequest from "@/components/InformationRequest";
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
      <ProposalSection />
      <InformationRequest />
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
