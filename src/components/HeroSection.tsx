
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollToProposal = () => {
    const element = document.getElementById('proposal');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://hexaintegra.com/wp-content/uploads/2024/12/Frame-4-4.png" 
          alt="Technology Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70" />
      </div>

      {/* Background with soft tech pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#dc2626" opacity="0.3"/>
                <circle cx="80" cy="20" r="1" fill="#dc2626" opacity="0.2"/>
                <circle cx="50" cy="50" r="1.5" fill="#dc2626" opacity="0.25"/>
                <circle cx="20" cy="80" r="1" fill="#dc2626" opacity="0.2"/>
                <circle cx="80" cy="80" r="2" fill="#dc2626" opacity="0.3"/>
                <line x1="20" y1="20" x2="50" y2="50" stroke="#dc2626" strokeWidth="0.5" opacity="0.1"/>
                <line x1="50" y1="50" x2="80" y2="80" stroke="#dc2626" strokeWidth="0.5" opacity="0.1"/>
                <line x1="80" y1="20" x2="50" y2="50" stroke="#dc2626" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-pattern)"/>
          </svg>
        </div>
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-hexa-red/10 rounded-lg rotate-12 transform"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-hexa-red/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-hexa-red/10 rounded-lg rotate-45 transform"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="min-h-screen flex items-center pt-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 bg-hexa-red/10 border border-hexa-red/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-hexa-red rounded-full"></div>
              <span className="text-hexa-red font-medium text-sm">CV. Hexa Integra Mandiri</span>
            </div>
            
            <h1 className="hero-title font-bold text-gray-900 mb-6 leading-tight">
              Proposal Pengembangan
              <span className="block text-hexa-red">Aplikasi Terintegrasi</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Disusun oleh <span className="font-semibold text-hexa-red">CV. Hexa Integra Mandiri</span> untuk
            </p>
            <p className="text-2xl font-semibold text-gray-900 mb-12">
              PT Samugara Global Capital
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg"
                onClick={scrollToProposal}
                className="bg-hexa-red hover:bg-hexa-red/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="mr-2 w-5 h-5" />
                Lihat Proposal
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-hexa-red text-hexa-red hover:bg-hexa-red hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Hubungi Kami
              </Button>
            </div>
            
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-hexa-red mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
