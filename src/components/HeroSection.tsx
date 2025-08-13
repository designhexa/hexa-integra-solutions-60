import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const goToProposalPage = () => {
    navigate("/proposal");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image Pattern */}
      <div className="absolute inset-0">
        <img
          src="https://hexaintegra.com/wp-content/uploads/2024/12/Frame-4-4.png"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" />
      </div>

      {/* ... background pattern SVG tetap sama ... */}

      <div className="container-custom relative z-10">
        <div className="min-h-screen flex items-center pt-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 bg-hexa-red/10 border border-hexa-red/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-hexa-red rounded-full"></div>
              <span className="text-hexa-red font-medium text-sm">
                CV. Hexa Integra Mandiri
              </span>
            </div>

            <h1 className="hero-title font-bold text-gray-900 mb-6 leading-tight">
              Proposal Pengembangan
              <span className="block text-hexa-red">Aplikasi Terintegrasi</span>
            </h1>

            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Disusun oleh{" "}
              <span className="font-semibold text-hexa-red">
                CV. Hexa Integra Mandiri
              </span>{" "}
              untuk
            </p>
            <p className="text-2xl font-semibold text-gray-900 mb-12">
              PT Samugara Global Capital
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* Tombol ke halaman Proposal */}
              <Button
                size="lg"
                onClick={goToProposalPage}
                className="bg-hexa-red hover:bg-hexa-red/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="mr-2 w-5 h-5" />
                Lihat Proposal
              </Button>

              {/* Tombol Hubungi Kami */}
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
