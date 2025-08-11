import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, MessageSquare, CheckCircle, Heart } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center animate-fade-in-up">
          <h2 className="section-title text-gray-900 mb-8">
            Penutup Proposal
          </h2>

          <Card className="bg-gray-50 border-gray-200 max-w-4xl mx-auto shadow-sm">
            <CardContent className="p-10 md:p-12">
              {/* Icon utama */}
              <div className="w-16 h-16 bg-hexa-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-hexa-red" />
              </div>

              {/* Paragraf penutup */}
              <p className="text-lg leading-relaxed mb-10 text-gray-700">
                Terima kasih atas perhatian dan kerja sama yang baik. Kami menantikan kesempatan
                untuk berdiskusi lebih lanjut mengenai proyek ini dan memberikan solusi terbaik
                untuk kebutuhan <span className="font-semibold text-hexa-red">PT Samugara Global Capital</span>.
              </p>

              {/* Tiga poin keunggulan */}
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Solusi Terpercaya",
                    desc: "Pengalaman dan keahlian untuk proyek Anda",
                  },
                  {
                    icon: MessageSquare,
                    title: "Komunikasi Terbuka",
                    desc: "Diskusi mendalam untuk hasil optimal",
                  },
                  {
                    icon: HandHeart,
                    title: "Komitmen Tinggi",
                    desc: "Dedikasi penuh untuk kesuksesan proyek",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-hexa-red/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-hexa-red" />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer penutup */}
          <div className="mt-12 text-center">
            <p className="text-hexa-red font-semibold text-lg">
              CV. Hexa Integra Mandiri
            </p>
            <p className="text-gray-600 mt-1">
              Siap menjadi partner teknologi terpercaya Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
