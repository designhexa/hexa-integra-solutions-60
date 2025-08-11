
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Target, Database, BarChart3, CheckCircle, Shield, Clock, Code, Briefcase, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const ProposalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "background",
      title: "Latar Belakang & Tujuan",
      content: (
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Perkenankan kami, <span className="font-semibold text-hexa-red">CV. Hexa Integra Mandiri</span>, 
            menyampaikan proposal pengembangan aplikasi terintegrasi untuk memenuhi kebutuhan 
            <span className="font-semibold text-hexa-red"> PT Samugara Global Capital</span>.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aplikasi ini akan mencakup:</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
              ].map((feature, index) => (
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
      )
    },
    {
      id: "estimation",
      title: "Estimasi Waktu dan Biaya",
      content: (
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-hexa-red/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-hexa-red" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Timeline & Investasi Pengembangan</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-center">Timeline detail dan breakdown biaya untuk setiap fase pengembangan</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Timeline Pengembangan</h4>
                  {[
                    "Fase Analisis & Desain: 2-3 minggu",
                    "Fase Development: 12-16 minggu", 
                    "Fase Testing & Deployment: 2-3 minggu",
                    "Total estimasi: 16-22 minggu"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-hexa-red rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-hexa-red/5 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Investasi</h4>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-hexa-red mb-2">Rp 50.000.000</p>
                    <p className="text-gray-600 mb-2">sampai dengan</p>
                    <p className="text-3xl font-bold text-hexa-red">Rp 250.000.000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: "technical",
      title: "Pendekatan Teknis",
      content: (
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-hexa-red/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Code className="w-8 h-8 text-hexa-red" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Arsitektur Sistem & Teknologi</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-center">Teknologi yang disarankan dan arsitektur sistem yang optimal</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: "Frontend", value: "React.js dengan TypeScript" },
                  { label: "Backend", value: "Node.js dengan Express.js" },
                  { label: "Database", value: "PostgreSQL dengan Redis Cache" },
                  { label: "Cloud", value: "AWS dengan Auto Scaling" },
                  { label: "Security", value: "JWT Authentication & Role-based Access" },
                  { label: "API", value: "RESTful API dengan GraphQL" }
                ].map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-hexa-red mb-2">{tech.label}</h4>
                    <p className="text-sm text-gray-700">{tech.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: "portfolio",
      title: "Pengalaman & Portofolio",
      content: (
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-hexa-red/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="w-8 h-8 text-hexa-red" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Track Record Proyek Sejenis</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-center">Pengalaman dan case studies proyek sejenis yang pernah dikerjakan</p>
              
              <div className="space-y-4">
                {[
                  "Sistem ERP Pertamina Lomanis (2024)",
                  "Sistem Informasi Dinas PU Jatim",
                  "Ship Monitoring System PT. Global Eka Marine",
                  "Sistem Payroll KCT Group Indonesia",
                  "10+ tahun pengalaman sistem terintegrasi"
                ].map((project, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-hexa-red rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">{project}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: "discussion",
      title: "Mari Berdiskusi",
      content: (
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-hexa-red/5 border border-hexa-red/20 rounded-2xl p-12">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-hexa-red" />
            <h3 className="text-3xl font-semibold mb-6 text-gray-900">Siap untuk Diskusi Lebih Lanjut</h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Kami siap untuk menjadwalkan meeting dan diskusi mendalam mengenai kebutuhan 
              pengembangan aplikasi terintegrasi untuk PT Samugara Global Capital.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-hexa-red/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Target className="w-6 h-6 text-hexa-red" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Konsultasi Gratis</h4>
                <p className="text-sm text-gray-600">Diskusi kebutuhan tanpa biaya</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-hexa-red/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <FileText className="w-6 h-6 text-hexa-red" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proposal Detail</h4>
                <p className="text-sm text-gray-600">Dokumen teknis lengkap</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-hexa-red/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <CheckCircle className="w-6 h-6 text-hexa-red" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Solusi Terbaik</h4>
                <p className="text-sm text-gray-600">Disesuaikan dengan kebutuhan</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="proposal" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="relative">
          {/* Slide Content */}
          <div className="min-h-[600px] mb-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="section-title text-gray-900 mb-6">
                {slides[currentSlide].title}
              </h2>
            </div>
            
            <div className="animate-fade-in">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button 
              onClick={prevSlide}
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4" />
              Sebelumnya
            </Button>
            
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-hexa-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              onClick={nextSlide}
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              disabled={currentSlide === slides.length - 1}
            >
              Selanjutnya
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Slide Counter */}
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Slide {currentSlide + 1} dari {slides.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSlider;
