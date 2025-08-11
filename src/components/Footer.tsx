
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-hexa-red mb-4">HEXA INTEGRA MANDIRI WORKSHOP</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hexa-red mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  Jalan Bukit Kismadani, Kompleks Balai RW 13 Bluru Kidul,<br />
                  Kec. Sidoarjo, Jawa Timur.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontak</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hexa-red" />
                <span>0821 4355 8433</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-hexa-red" />
                <span>halo@hexaintegra.com</span>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Jam Operasional</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-hexa-red mt-1" />
                <div>
                  <p>Senin - Jumat</p>
                  <p className="text-sm">08:00 - 17:00 WIB</p>
                  <p className="mt-2">Sabtu - Ahad</p>
                  <p className="text-sm">Jadwalkan Janji Temu</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="border-hexa-red text-hexa-red hover:bg-hexa-red hover:text-white mt-4"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Jadwalkan Janji Temu
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CV. Hexa Integra Mandiri. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://hexaintegra.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-hexa-red transition-colors"
              >
                Website
              </a>
              <a 
                href="https://hexaintegra.com/layanan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-hexa-red transition-colors"
              >
                Layanan
              </a>
              <a 
                href="https://hexaintegra.com/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-hexa-red transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
