
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Target, Database, BarChart3, CheckCircle, Shield } from "lucide-react";

const ProposalSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Keuangan",
      description: "Pencatatan, pengelolaan, dan pelaporan transaksi keuangan secara real-time."
    },
    {
      icon: FileText,
      title: "Pengadaan",
      description: "Manajemen permintaan dan pembelian barang/jasa hingga monitoring proses pengadaan."
    },
    {
      icon: Database,
      title: "Inventory Management",
      description: "Mengatur keluar masuk barang per proyek dan terintegrasi dengan keuangan."
    },
    {
      icon: Target,
      title: "Finance Dashboard",
      description: "Dashboard interaktif untuk memantau kondisi keuangan dan KPI utama."
    },
    {
      icon: CheckCircle,
      title: "Multi Approval System",
      description: "Persetujuan berlapis sesuai struktur organisasi dan otorisasi."
    },
    {
      icon: Shield,
      title: "Keamanan Data",
      description: "Integrasi data dan keamanan menjadi prioritas utama untuk 6 perusahaan."
    }
  ];

  return (
    <section id="proposal" className="mt-20 section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-gray-900 mb-6">
            Latar Belakang & Tujuan
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Perkenankan kami, <span className="font-semibold text-hexa-red">CV. Hexa Integra Mandiri</span>, 
              menyampaikan proposal pengembangan aplikasi terintegrasi untuk memenuhi kebutuhan 
              <span className="font-semibold text-hexa-red"> PT Samugara Global Capital</span>.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aplikasi ini akan mencakup:</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="card-hover border-gray-200 bg-white">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-hexa-red/10 rounded-xl flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-hexa-red" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-hexa-red/5 rounded-2xl border border-hexa-red/20">
              <p className="text-gray-700 leading-relaxed">
                Sistem ini akan digunakan oleh <span className="font-semibold text-hexa-red">1 group usaha 
                dengan total 6 perusahaan</span> yang saling terhubung, sehingga integrasi data dan 
                keamanan menjadi prioritas utama.
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mt-8 leading-relaxed">
              Melalui proposal ini, kami berharap dapat memberikan gambaran teknis, estimasi pengembangan, 
              serta solusi yang tepat untuk kebutuhan PT Samugara Global Capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;
