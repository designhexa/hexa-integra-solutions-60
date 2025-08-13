import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProposalSlider from "@/components/ProposalSlider";
import Footer from "@/components/Footer";

const Proposal = () => {
  // daftar id yang diizinkan untuk di-scroll otomatis
  const sections = [
    { name: "Tentang Kami", id: "company", type: "scroll" },
    { name: "Layanan", id: "services", type: "scroll" },
    { name: "Portofolio", id: "portfolio", type: "scroll" },
    { name: "Kontak", id: "contact", type: "scroll" },
  ];

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const found = sections.find((s) => s.id === targetId);

      if (found) {
        const el = document.getElementById(found.id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300); // delay biar nunggu render selesai
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <ProposalSlider />

      {/* Dummy section untuk contoh */}
      <section id="company" className="min-h-screen bg-red-100 flex items-center justify-center">
        <h2 className="text-4xl">Tentang Kami</h2>
      </section>
      <section id="services" className="min-h-screen bg-green-100 flex items-center justify-center">
        <h2 className="text-4xl">Layanan</h2>
      </section>
      <section id="portfolio" className="min-h-screen bg-blue-100 flex items-center justify-center">
        <h2 className="text-4xl">Portofolio</h2>
      </section>
      <section id="contact" className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-4xl">Kontak</h2>
      </section>

      <Footer />
    </div>
  );
};

export default Proposal;
