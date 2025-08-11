
import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, MessageSquare, CheckCircle } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center animate-fade-in-up">
          <h2 className="section-title text-gray-900 mb-8">
            Penutup Proposal
          </h2>
          
          <Card className="bg-gray-50 border-gray-200 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <MessageSquare className="w-12 h-12 mx-auto mb-6 text-hexa-red" />
              
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                Terima kasih atas perhatian dan kerja sama yang baik. Kami menantikan kesempatan 
                untuk berdiskusi lebih lanjut mengenai proyek ini dan memberikan solusi terbaik 
                untuk kebutuhan <span className="font-semibold text-hexa-red">PT Samugara Global Capital</span>.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-hexa-red" />
                  <h4 className="font-semibold mb-2 text-gray-900">Solusi Terpercaya</h4>
                  <p className="text-sm text-gray-600">Pengalaman dan keahlian untuk proyek Anda</p>
                </div>
                
                <div className="text-center">
                  <MessageSquare className="w-8 h-8 mx-auto mb-3 text-hexa-red" />
                  <h4 className="font-semibold mb-2 text-gray-900">Komunikasi Terbuka</h4>
                  <p className="text-sm text-gray-600">Diskusi mendalam untuk hasil optimal</p>
                </div>
                
                <div className="text-center">
                  <HandHeart className="w-8 h-8 mx-auto mb-3 text-hexa-red" />
                  <h4 className="font-semibold mb-2 text-gray-900">Komitmen Tinggi</h4>
                  <p className="text-sm text-gray-600">Dedikasi penuh untuk kesuksesan proyek</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <p className="text-hexa-red font-semibold text-lg">
              CV. Hexa Integra Mandiri
            </p>
            <p className="text-gray-600 mt-2">
              Siap menjadi partner teknologi terpercaya Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
