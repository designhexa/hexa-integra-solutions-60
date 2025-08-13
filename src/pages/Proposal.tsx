import Navigation from "@/components/Navigation";
import ProposalSlider from "@/components/ProposalSlider";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Proposal = () => {
  const navigate = useNavigate();

  // Menu di halaman proposal
  const menuLinks = [
    { name: "Tentang Kami", id: "company" },
    { name: "Layanan", id: "services" },
    { name: "Portofolio", id: "portfolio" },
    { name: "Kontak", id: "contact" },
  ];

  const handleNavigate = (id: string) => {
    navigate(`/#${id}`);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation khusus halaman proposal */}
      <Navigation
        extraMenu={
          <ul className="flex gap-6">
            {menuLinks.map((menu) => (
              <li
                key={menu.id}
                className="cursor-pointer hover:text-hexa-red"
                onClick={() => handleNavigate(menu.id)}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        }
      />

      <ProposalSlider />
      <Footer />
    </div>
  );
};

export default Proposal;
