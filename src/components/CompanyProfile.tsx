import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Zap, Globe, ArrowRight } from "lucide-react";

const CompanyProfile = () => {
  const expertise = [
    {
      icon: Zap,
      title: "Pengembangan Aplikasi Custom",
      description: "Solusi aplikasi yang disesuaikan dengan kebutuhan spesifik perusahaan",
    },
    {
      icon: Globe,
      title: "Integrasi Sistem",
      description: "Menghubungkan berbagai sistem untuk workflow yang seamless",
    },
    {
      icon: Award,
      title: "Solusi IT untuk Perusahaan",
      description: "Konsultasi dan implementasi teknologi untuk transformasi digital",
    },
  ];

  return (
    <section id="company" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Content */}
          <div className="animate-fade-in-left flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-hexa-red rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">H</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Hexa Integra Mandiri
                    </h2>
                    <p className="text-hexa-red font-semibold">
                      Solusi Teknologi Terintegrasi
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="section-title text-gray-900 mb-6">
                Tentang CV. Hexa Integra Mandiri
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  CV. Hexa Integra Mandiri adalah perusahaan teknologi yang berfokus pada
                  pengembangan solusi aplikasi terintegrasi untuk kebutuhan bisnis modern.
                  Dengan pengalaman yang solid dalam industri IT, kami berkomitmen
                  memberikan solusi teknologi terdepan.
                </p>

                <div className="grid gap-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Keahlian Utama Kami:
                  </h3>
                  {expertise.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-hexa-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-hexa-red" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button
              className="bg-hexa-red hover:bg-hexa-red/90 text-white mt-6"
              onClick={() => window.open("https://hexaintegra.com", "_blank")}
            >
              Kunjungi Website Kami
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in-right flex flex-col justify-between">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden flex flex-col h-full">
              <CardContent className="p-0 flex flex-col justify-between h-full">
                <div className="bg-hexa-red p-8 text-white">
                  <Users className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Tim Profesional</h3>
                  <p className="text-white/90">
                    Tim developer dan konsultan IT berpengalaman yang siap memberikan
                    solusi terbaik untuk kebutuhan teknologi perusahaan Anda.
                  </p>
                </div>

                <div className="p-8 flex-1 flex items-end">
                  <img
                    src="https://hexaintegra.com/wp-content/uploads/2025/08/Layanan-5-2-scaled.png"
                    alt="Hexa Integra Technology"
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
