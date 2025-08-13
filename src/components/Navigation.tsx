import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Beranda", id: "hero", type: "scroll" },
    { name: "Tentang Kami", id: "company", type: "scroll" },
    { name: "Layanan", id: "services", type: "scroll" },
    { name: "Portofolio", id: "portfolio", type: "scroll" },
    { name: "Kontak", id: "contact", type: "scroll" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg shadow-gray-200/50 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2020/12/logo_hexa.png"
              alt="Hexa Integra Mandiri"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              location.pathname === "/" ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-gray-700 hover:text-hexa-red transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={`/#${item.id}`}
                  className="text-gray-700 hover:text-hexa-red transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
            {/* Proposal Button */}
            <Link
              to="/proposal"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Proposal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                location.pathname === "/" ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-left text-gray-700 hover:text-hexa-red transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={`/#${item.id}`}
                    className="text-left text-gray-700 hover:text-hexa-red transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              {/* Proposal Button */}
              <Link
                to="/proposal"
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-center hover:bg-red-700 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Proposal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
