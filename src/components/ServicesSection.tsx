
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Globe, Palette, Code, ExternalLink } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Aplikasi Custom",
      description: "Kembangan sistem yang sesuai dengan kebutuhan bisnis perusahaan, dan ciptakan suasana kerja yang efektif dan efisien untuk mempercepat laju bisnis Anda."
    },
    {
      icon: Smartphone,
      title: "Aplikasi Mobile",
      description: "Mobilisasikan bisnis Anda di era digital dengan mengembangkan aplikasi Android. Siap mendukung operasional bisnis anda sehingga lebih termonitor."
    },
    {
      icon: Shield,
      title: "Keamanan Data",
      description: "Pada era digital, bisnis yang berbasis digital menjadi sasaran empuk hacker. Data pelanggan dan perusahaan rawan disalahgunakan oleh hacker."
    },
    {
      icon: Globe,
      title: "Website",
      description: "Buat website company profile atau toko online yang memiliki performa cepat, mudah digunakan serta SEO friendly, khusus untuk bisnis Anda sendiri."
    },
    {
      icon: Palette,
      title: "UI / UX Desain",
      description: "Layanan ini adalah untuk Anda yang sepakat bahwa komunikasi visual merupakan satu hal yang cukup krusial dalam menyampaikan pesan, visi, dan misi perusahaan Anda."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-gray-900 mb-6">
            Layanan Kami
          </h2>
          <div className="flex justify-center mb-8">
            <Button 
              variant="outline"
              className="border-hexa-red text-hexa-red hover:bg-hexa-red hover:text-white"
              onClick={() => window.open('https://hexaintegra.com/layanan/', '_blank')}
            >
              LIHAT LAYANAN
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-gray-200 bg-white h-full animate-scale-in">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 bg-hexa-red/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-hexa-red" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
