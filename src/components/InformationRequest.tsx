
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Code, Briefcase, MessageCircle, Calendar, DollarSign, Layers } from "lucide-react";

const InformationRequest = () => {
  const requests = [
    {
      icon: Clock,
      title: "Estimasi waktu dan biaya pengembangan",
      description: "Timeline detail dan breakdown biaya untuk setiap fase pengembangan",
      details: [
        "Fase Analisis & Desain: 2-3 minggu",
        "Fase Development: 12-16 minggu", 
        "Fase Testing & Deployment: 2-3 minggu",
        "Total estimasi: 16-22 minggu",
        "Investasi: Rp 450.000.000 - Rp 650.000.000"
      ]
    },
    {
      icon: Code,
      title: "Pendekatan teknis/arsitektur sistem",
      description: "Teknologi yang disarankan dan arsitektur sistem yang optimal",
      details: [
        "Frontend: React.js dengan TypeScript",
        "Backend: Node.js dengan Express.js",
        "Database: PostgreSQL dengan Redis Cache",
        "Cloud: AWS dengan Auto Scaling",
        "Security: JWT Authentication & Role-based Access"
      ]
    },
    {
      icon: Briefcase,
      title: "Pengalaman atau portofolio pengembangan serupa",
      description: "Track record dan case studies proyek sejenis yang pernah dikerjakan",
      details: [
        "Sistem ERP Pertamina Lomanis (2024)",
        "Sistem Informasi Dinas PU Jatim",
        "Ship Monitoring System PT. Global Eka Marine",
        "Sistem Payroll KCT Group Indonesia",
        "10+ tahun pengalaman sistem terintegrasi"
      ]
    }
  ];

  return (
    <section id="information" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-gray-900 mb-6">
            Permintaan Informasi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami berharap dapat menjadwalkan diskusi lebih lanjut terkait kebutuhan ini.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {requests.map((request, index) => (
            <Card key={index} className="card-hover border-gray-200 animate-scale-in bg-white h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-hexa-red/10 rounded-2xl flex items-center justify-center mb-6">
                  <request.icon className="w-8 h-8 text-hexa-red" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{request.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{request.description}</p>
                
                <div className="space-y-3">
                  {request.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-hexa-red rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-hexa-red/5 border border-hexa-red/20 rounded-2xl p-8 text-center">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-hexa-red" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mari Berdiskusi</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kami siap untuk menjadwalkan meeting dan diskusi mendalam mengenai kebutuhan 
            pengembangan aplikasi terintegrasi untuk PT Samugara Global Capital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformationRequest;
