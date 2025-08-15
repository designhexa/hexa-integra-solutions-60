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

  const slides = [
    {
      id: "background",
      title: "Latar Belakang",
      content: (
        <div className="max-w-4xl mx-auto">
          <p className="w-full text-center text-xs sm:text-lg text-gray-700 leading-relaxed mb-2 sm:mb-8 px-2 sm:px-0">
            Menindaklanjuti permintaan penawaran dari Direktur PT Samugara Global Capital, berikut ini kami kirimkan proposal kerja pengembangan aplikasi perusahaan sesuai yang diminta.
            Proposal ini kami bagi dan rinci ke dalam beberapa aspek pembahasan.
          </p>
          
          <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-8 shadow-lg border border-gray-200 mx-2 sm:mx-0">
            <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-6 text-center">Kebutuhan Sistem Terintegrasi</h3>
            
            <div className="mt-2 sm:mt-6 p-2 sm:p-6 bg-hexa-red/5 rounded-lg sm:rounded-2xl border border-hexa-red/20">
              <p className="text-xs sm:text-base text-gray-700 leading-relaxed text-center">
                Kebutuhan yang diminta adalah <span className="font-semibold text-hexa-red">Aplikasi Web terintegrasi untuk sebuah Grup Usaha</span> yang terdiri dari enam perusahaan dan saling terhubung, sehingga integrasi data dan 
                keamanan menjadi prioritas utama.
              </p>
            </div>
          </div>
          
          <p className="text-xs sm:text-lg text-gray-700 mt-2 sm:mt-8 leading-relaxed text-center px-2 sm:px-0">
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
        <div className="max-w-4xl mx-auto max-h-[450px] sm:max-h-[500px] lg:max-h-none overflow-y-auto">
          <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:p-8 shadow-lg border border-gray-200 mx-1 sm:mx-2 lg:mx-0">
            <h3 className="text-sm sm:text-lg lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 lg:mb-6 text-center">Aplikasi ini akan mencakup:</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
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
                  <CardContent className="p-2 sm:p-6">
                    <div className="w-5 h-5 sm:w-12 sm:h-12 bg-hexa-red/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-4">
                      <feature.icon className="w-3 h-3 sm:w-6 sm:h-6 text-hexa-red" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-3 text-xs sm:text-base">{feature.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
        id: "penawaran",
        title: "Penawaran Kerjasama",
        content: (
          <div className="max-w-4xl mx-auto">
            <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
              <CardContent className="p-2 sm:p-8">
                <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-6 mx-auto">
                  <Clock className="w-3 h-3 sm:w-8 sm:h-8 text-hexa-red" />
                </div>
        
                <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-6 text-center">
                  Format & Scope Kerjasama
                </h3>
                <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-2 sm:mb-8 text-center">
                  Format kerjasama yang ditawarkan adalah:
                </p>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                  {/* Kolom Kiri */}
                  <div className="space-y-4">
                    {/* 1 */}
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="text-hexa-red font-bold">1.</span>
                        <p className="text-gray-700 text-xs sm:text-base font-semibold">
                          Kerjasama antara dua pihak, yaitu:
                        </p>
                      </div>
                      <div className="ml-8 mt-1 space-y-1">
                        {[
                          "a. CV. Hexa Integra Mandiri",
                          "b. PT. Samugara Global Capital",
                        ].map((subItem, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 bg-hexa-red rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-700 text-xs sm:text-base">{subItem}</p>
                          </div>
                        ))}
                      </div>
                    </div>
        
                    {/* 2 */}
                    <div className="flex items-start gap-2">
                      <span className="text-hexa-red font-bold">2.</span>
                      <p className="text-gray-700 text-xs sm:text-base">
                        Output kerjasama adalah aplikasi berbasis web sesuai requirement yang sudah siap digunakan
                      </p>
                    </div>
        
                    {/* 3 */}
                    <div className="flex items-start gap-2">
                      <span className="text-hexa-red font-bold">3.</span>
                      <p className="text-gray-700 text-xs sm:text-base">
                        Proses pengerjaan tidak mengharuskan pihak Hexa untuk hadir atau stay di kantor Samugara, pengerjaan dimaksimalkan secara online
                      </p>
                    </div>
        
                    {/* 4 */}
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="text-hexa-red font-bold">4.</span>
                        <p className="text-gray-700 text-xs sm:text-base font-semibold">
                          Yang termasuk scope kerja:
                        </p>
                      </div>
                      <div className="ml-8 mt-1 space-y-1">
                        {[
                          "Pengembangan aplikasi sesuai request",
                          "Setting server",
                          "Garansi aplikasi sebanyak jumlah bulan pengembangan",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 bg-hexa-red rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-700 text-xs sm:text-base">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
        
                  {/* Kolom Kanan */}
                  <div className="space-y-4">
                    {/* 5 */}
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="text-hexa-red font-bold">5.</span>
                        <p className="text-gray-700 text-xs sm:text-base font-semibold">
                          Yang tidak termasuk scope kerja:
                        </p>
                      </div>
                      <div className="ml-8 mt-1 space-y-1">
                        {[
                          "Penyediaan server dan domain",
                          "Technical support setelah proses serah terima",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 bg-hexa-red rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-700 text-xs sm:text-base">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
        
                    {/* 6 */}
                    <div className="flex items-start gap-2">
                      <span className="text-hexa-red font-bold">6.</span>
                      <p className="text-gray-700 text-xs sm:text-base">
                        Keterlambatan dari salah satu pihak bisa berdampak pada penerapan late charge
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

    },
    {
      id: "estimation",
      title: "Estimasi Waktu dan Biaya",
      content: (
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <CardContent className="p-2 sm:p-8">
              <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-6 mx-auto">
                <Clock className="w-3 h-3 sm:w-8 sm:h-8 text-hexa-red" />
              </div>
              <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-6 text-center">Timeline & Investasi Pengembangan</h3>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-2 sm:mb-8 text-center">Timeline detail dan breakdown biaya untuk setiap fase pengembangan</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8">
                <div className="space-y-1 sm:space-y-4">
                  <h4 className="text-xs sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-4">Timeline Pengembangan</h4>
                  {[
                    "Fase Analisis & Desain: 2-3 minggu",
                    "Fase Development: 12-16 minggu", 
                    "Fase Testing & Deployment: 2-3 minggu",
                    "Total estimasi: 16-22 minggu"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-1.5">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-hexa-red rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-hexa-red/5 rounded-lg sm:rounded-xl p-2 sm:p-6">
                  <h4 className="text-xs sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-4">Investasi</h4>
                  <div className="text-center">
                    <p className="text-sm sm:text-3xl font-bold text-hexa-red mb-0.5 sm:mb-2">Rp 50.000.000</p>
                    <p className="text-gray-600 mb-0.5 sm:mb-2 text-xs sm:text-base">sampai dengan</p>
                    <p className="text-sm sm:text-3xl font-bold text-hexa-red">Rp 150.000.000</p>
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
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <CardContent className="p-2 sm:p-8">
              <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-6 mx-auto">
                <Code className="w-3 h-3 sm:w-8 sm:h-8 text-hexa-red" />
              </div>
              <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-6 text-center">Arsitektur Sistem & Teknologi</h3>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-2 sm:mb-8 text-center">Teknologi yang disarankan dan arsitektur sistem yang optimal</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
                {[
                  { label: "Frontend", value: "React.js dengan TypeScript" },
                  { label: "Backend", value: "Node.js dengan Express.js" },
                  { label: "Database", value: "PostgreSQL dengan Redis Cache" },
                  { label: "Cloud", value: "AWS dengan Auto Scaling" },
                  { label: "Security", value: "JWT Authentication & Role-based Access" },
                  { label: "API", value: "RESTful API dengan GraphQL" }
                ].map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-2 sm:p-4">
                    <h4 className="font-semibold text-hexa-red mb-0.5 sm:mb-2 text-xs sm:text-base">{tech.label}</h4>
                    <p className="text-xs sm:text-sm text-gray-700">{tech.value}</p>
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
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <CardContent className="p-2 sm:p-8">
              <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-6 mx-auto">
                <Briefcase className="w-3 h-3 sm:w-8 sm:h-8 text-hexa-red" />
              </div>
              <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-6 text-center">Portofolio Proyek Sejenis</h3>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-2 sm:mb-8 text-center">Pengalaman dan case studies proyek sejenis yang pernah dikerjakan</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-4 max-w-2xl mx-auto">
                {[
                  "Sistem Pelaporan SIKA Elektronik Pertamina Lomanis",
                  "Sistem Informasi Jalan & Jembatan Dinas PU Jawa Timur",
                  "Ship Monitoring System PT. Global Eka Marine",
                  "Sistem Real Time Absensi & Payroll KCT Group"
                ].map((project, index) => (
                  <div key={index} className="flex items-start gap-1.5 p-2 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-hexa-red rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium text-xs sm:text-sm">{project}</p>
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
          <div className="bg-hexa-red/5 border border-hexa-red/20 rounded-lg sm:rounded-2xl p-3 sm:p-12 mx-2 sm:mx-0">
            <MessageCircle className="w-6 h-6 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-6 text-hexa-red" />
            <h3 className="text-sm sm:text-3xl font-semibold mb-2 sm:mb-6 text-gray-900">Siap untuk Diskusi Lebih Lanjut</h3>
            <p className="text-xs sm:text-xl text-gray-700 mb-2 sm:mb-8 leading-relaxed">
              Kami siap untuk menjadwalkan meeting dan diskusi mendalam mengenai kebutuhan 
              pengembangan aplikasi terintegrasi untuk PT Samugara Global Capital.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 mt-2 sm:mt-8">
              <div className="text-center">
                <div className="w-5 h-5 sm:w-12 sm:h-12 bg-hexa-red/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-3 mx-auto">
                  <Target className="w-2.5 h-2.5 sm:w-6 sm:h-6 text-hexa-red" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-2 text-xs sm:text-base">Konsultasi Gratis</h4>
                <p className="text-xs sm:text-sm text-gray-600">Diskusi kebutuhan tanpa biaya</p>
              </div>
              <div className="text-center">
                <div className="w-5 h-5 sm:w-12 sm:h-12 bg-hexa-red/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-3 mx-auto">
                  <FileText className="w-2.5 h-2.5 sm:w-6 sm:h-6 text-hexa-red" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-2 text-xs sm:text-base">Proposal Detail</h4>
                <p className="text-xs sm:text-sm text-gray-600">Dokumen teknis lengkap</p>
              </div>
              <div className="text-center">
                <div className="w-5 h-5 sm:w-12 sm:h-12 bg-hexa-red/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-3 mx-auto">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-6 sm:h-6 text-hexa-red" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-2 text-xs sm:text-base">Solusi Terbaik</h4>
                <p className="text-xs sm:text-sm text-gray-600">Disesuaikan dengan kebutuhan</p>
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
          <Card className="bg-gray-50 border-gray-200 mx-2 sm:mx-0">
            <CardContent className="p-3 sm:p-12">
              <MessageCircle className="w-5 h-5 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-6 text-hexa-red" />
              
              <p className="text-xs sm:text-lg leading-relaxed mb-2 sm:mb-8 text-gray-700">
                Terima kasih atas perhatian dan kerja sama yang baik. Kami menantikan kesempatan 
                untuk berdiskusi lebih lanjut mengenai proyek ini dan memberikan solusi terbaik 
                untuk kebutuhan <span className="font-semibold text-hexa-red">PT Samugara Global Capital</span>.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 mt-2 sm:mt-8">
                <div className="text-center">
                  <CheckCircle className="w-4 h-4 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-3 text-hexa-red" />
                  <h4 className="font-semibold mb-0.5 sm:mb-2 text-gray-900 text-xs sm:text-base">Solusi Terpercaya</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Pengalaman dan keahlian untuk proyek Anda</p>
                </div>
                
                <div className="text-center">
                  <MessageCircle className="w-4 h-4 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-3 text-hexa-red" />
                  <h4 className="font-semibold mb-0.5 sm:mb-2 text-gray-900 text-xs sm:text-base">Komunikasi Terbuka</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Diskusi mendalam untuk hasil optimal</p>
                </div>
                
                <div className="text-center">
                  <HandHeart className="w-4 h-4 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-3 text-hexa-red" />
                  <h4 className="font-semibold mb-0.5 sm:mb-2 text-gray-900 text-xs sm:text-base">Komitmen Tinggi</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Dedikasi penuh untuk kesuksesan proyek</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-3 sm:mt-12 text-center">
            <p className="text-hexa-red font-semibold text-xs sm:text-lg">
              CV. Hexa Integra Mandiri
            </p>
            <p className="text-gray-600 mt-0.5 sm:mt-2 text-xs sm:text-base">
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

  if (!isProposalUnlocked) {
    return (
      <section id="proposal" className="section-padding bg-gray-50 pt-24 sm:pt-28 pb-4 sm:pb-12 min-h-screen">
        <div className="container-custom">
          <div className="text-center mb-3 sm:mb-8">
            <h2 className="text-lg sm:text-3xl font-bold text-gray-900">Proposal Pengembangan Aplikasi</h2>
            <p className="text-sm sm:text-lg text-gray-600 mt-1 sm:mt-4">Untuk PT Samugara Global Capital</p>
          </div>
          <LoginAccess onLoginSuccess={handleLoginSuccess} />
        </div>
      </section>
    );
  }

  return (
    <section id="proposal" className="section-padding bg-gray-50 pt-24 sm:pt-28 pb-4 sm:pb-12 min-h-screen">
      <div className="container-custom max-w-7xl">
        
        {/* Judul dengan tinggi tetap - dikurangi tingginya untuk mobile */}
        <div className="h-4 sm:h-12 flex items-center justify-center flex-shrink-0">
          <h2 className="text-base sm:text-3xl font-bold text-center text-gray-900">
            {slides[currentSlide].title}
          </h2>
        </div>

        {/* Container untuk konten dan tombol navigasi */}
        <div className="relative px-1 sm:px-20">
          {/* Konten Slide dengan tinggi yang ditambah untuk mobile */}
          <div className="h-[500px] sm:h-[650px] flex items-center justify-center overflow-hidden">
            <div className="w-full animate-fade-in">
              {slides[currentSlide].content}
            </div>
          </div>
        
          {/* Tombol Prev - dipindahkan lebih ke tepi */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute -left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-1 sm:p-4 transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-3 h-3 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        
          {/* Tombol Next - dipindahkan lebih ke tepi */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="absolute -right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-1 sm:p-4 transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-3 h-3 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* Pagination dengan tinggi tetap dan jarak yang ditambah */}
        <div className="h-8 sm:h-8 flex flex-col items-center justify-center flex-shrink-0 mt-8 sm:mt-8">
          <div className="flex justify-center gap-1.5 sm:gap-3 mb-2 sm:mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-hexa-red scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="text-center text-gray-600">
            <p className="text-xs sm:text-sm">
              Slide {currentSlide + 1} dari {slides.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSlider;
