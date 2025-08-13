import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoginAccess from "@/components/LoginAccess";
import {
  FileText, Target, Database, BarChart3, CheckCircle, Shield,
  Clock, Code, Briefcase, MessageCircle, ChevronLeft, ChevronRight, HandHeart
} from "lucide-react";

const ProposalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isProposalUnlocked, setIsProposalUnlocked] = useState(false);

  const handleLoginSuccess = () => {
    setIsProposalUnlocked(true);
  };

  // Jika proposal belum di-unlock, tampilkan halaman login
  if (!isProposalUnlocked) {
    return (
      <section className="pt-24 pb-16">
      <section id="proposal" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Proposal Pengembangan Aplikasi</h2>
            <p className="text-lg text-gray-600 mt-4">Untuk PT Samugara Global Capital</p>
          </div>
          <LoginAccess onLoginSuccess={handleLoginSuccess} />
        </div>
      </section>
    );
  }

  const slides = [
    {
      id: "background",
      title: "Latar Belakang",
      content: (
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Perkenankan kami, <span className="font-semibold text-hexa-red">CV. Hexa Integra Mandiri</span>, 
            menyampaikan proposal pengembangan aplikasi terintegrasi untuk memenuhi kebutuhan 
            <span className="font-semibold text-hexa-red"> PT Samugara Global Capital</span>.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Kebutuhan Sistem Terintegrasi</h3>
            
            <div className="mt-6 p-6 bg-hexa-red/5 rounded-2xl border border-hexa-red/20">
              <p className="text-gray-700 leading-relaxed text-center">
                Sistem ini akan digunakan oleh <span className="font-semibold text-hexa-red">1 group usaha 
                dengan total 6 perusahaan</span> yang saling terhubung, sehingga integrasi data dan 
                keamanan menjadi prioritas utama.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mt-8 leading-relaxed text-center">
            Melalui proposal ini, kami berharap dapat memberikan gambaran teknis, estimasi pengembangan, 
            serta solusi yang tepat untuk kebutuhan PT Samugara Global Capital.
          </p>
        </div>
      )
    },
    {
      id: "modules",
      title: "Modul Aplikasi",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Aplikasi ini akan mencakup:</h3>
            
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
                    <p className="text-3xl font-bold text-hexa-red">Rp 150.000.000</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Portofolio Proyek Sejenis</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-center">Pengalaman dan case studies proyek sejenis yang pernah dikerjakan</p>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  "Sistem Pelaporan SIKA Elektronik Pertamina Lomanis",
                  "Sistem Informasi Jalan & Jembatan Dinas PU Jawa Timur",
                  "Ship Monitoring System PT. Global Eka Marine",
                  "Sistem Real Time Absensi & Payroll KCT Group"
                ].map((project, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-hexa-red rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium text-sm">{project}</p>
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
    },
    {
      id: "closing",
      title: "Penutup Proposal",
      content: (
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-12">
              <MessageCircle className="w-12 h-12 mx-auto mb-6 text-hexa-red" />
              
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
                  <MessageCircle className="w-8 h-8 mx-auto mb-3 text-hexa-red" />
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
    <section id="proposal" className="py-8 lg:py-12 bg-gray-50 relative">
      <div className="container-custom relative">
        
        {/* Judul dengan tinggi tetap */}
        <div className="h-12 flex items-center justify-center flex-shrink-0">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            {slides[currentSlide].title}
          </h2>
        </div>

        {/* Container untuk konten dan tombol navigasi */}
        <div className="relative px-20">
          {/* Konten Slide dengan tinggi yang disesuaikan untuk slide terpanjang */}
          <div className="h-[650px] flex items-center justify-center overflow-hidden">
            <div className="w-full animate-fade-in">
              {slides[currentSlide].content}
            </div>
          </div>
        
          {/* Tombol Prev - di luar kontainer konten */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        
          {/* Tombol Next - di luar kontainer konten */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Pagination dengan tinggi tetap */}
        <div className="h-8 flex flex-col items-center justify-center flex-shrink-0 mt-8">
          <div className="flex justify-center gap-3 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-hexa-red scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

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
