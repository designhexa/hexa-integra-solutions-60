import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoginAccess from "@/components/LoginAccess";
import {
  FileText, Target, Database, BarChart3, CheckCircle, Shield, DollarSign, BookOpenText, Settings,
  Clock, Code, Briefcase, MessageCircle, ChevronLeft, ChevronRight, Layers, HandHeart
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

      <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
        <BookOpenText className="w-5 h-5 sm:w-10 sm:h-10 text-hexa-red" />
      </div>

      <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-6">
        Kebutuhan Sistem Terintegrasi
      </h3>
        
      <div className="mt-2 sm:mt-6 p-2 sm:p-6 bg-hexa-red/5 rounded-lg sm:rounded-2xl border border-hexa-red/20">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
            Kebutuhan yang diminta adalah <span className="font-semibold text-hexa-red">Aplikasi Web terintegrasi untuk sebuah Grup Usaha</span> 
            yang terdiri dari enam perusahaan dan saling terhubung, sehingga integrasi data dan keamanan menjadi prioritas utama.
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
          <div className="max-w-4xl mx-auto max-h-[450px] sm:max-h-[500px] lg:max-h-none overflow-y-auto">
            <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
              <CardContent className="p-2 sm:p-8">
                <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-6 mx-auto">
                  <Layers className="w-3 h-3 sm:w-8 sm:h-8 text-hexa-red" />
                </div>
        
                <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-6 text-center">
                  Format & Ruang Lingkup Kerjasama
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
                          "CV. Hexa Integra Mandiri",
                          "PT. Samugara Global Capital",
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
                  </div>
        
                  {/* Kolom Kanan */}
                  <div className="space-y-4">
                    {/* 4 */}
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="text-hexa-red font-bold">4.</span>
                        <p className="text-gray-700 text-xs sm:text-base font-semibold">
                          Yang termasuk lingkup kerja:
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
                    {/* 5 */}
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="text-hexa-red font-bold">5.</span>
                        <p className="text-gray-700 text-xs sm:text-base font-semibold">
                          Yang tidak termasuk lingkup kerja:
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
    id: "pengalaman",
    title: "Pengalaman Kerja Semisal",
    content: (
      <div className="max-w-4xl mx-auto max-h-[450px] sm:max-h-[500px] lg:max-h-none overflow-y-auto">
        <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:p-8 shadow-lg border border-gray-200 mx-1 sm:mx-2 lg:mx-0">
          <h3 className="text-sm sm:text-lg lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 lg:mb-6 text-center">
            Kami cukup berpengalaman dalam menangani pekerjaan-pekerjaan berikut:
          </h3>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            {[
              {
                title: "Keuangan",
                description: "Pencatatan, pengelolaan, dan pelaporan transaksi keuangan secara real-time.",
                year: "2022",
                project: "Implementasi sistem keuangan pada bosCOD (PT. Hadid Parama Indonesia)"
              },
              {
                title: "Pengadaan",
                description: "Manajemen permintaan dan pembelian barang/jasa hingga monitoring proses pengadaan.",
                year: "2019",
                project: "Implementasi sistem pengadaan barang (PT. Pelnas Ekalya Purnamasari/ ELPI)"
              },
              {
                title: "Inventory Management",
                description: "Manajemen persediaan yang mengatur masuk keluar barang untuk kebutuhan per proyek dan terintegrasi dengan keuangan.",
                year: "2018 atau sebelumnya",
                project: "Implementasi sistem inventory dan pergudangan (PT. Orela Shipyard)"
              },
              {
                title: "Finance Dashboard Monitoring",
                description: "Dashboard interaktif untuk memantau kondisi keuangan dan KPI utama secara komprehensif.",
                year: "2023",
                project: "Implementasi finance dashboard Obama (PT. Oremus Bahari Mandiri)"
              },
              {
                title: "Multi Approval System",
                description: "Mekanisme persetujuan berlapis sesuai struktur organisasi dan otorisasi di setiap perusahaan.",
                year: "2024",
                project: "Implementasi Electronic Surat Izin Kerja E-SIKA (Pertamina Lomanis)"
              }
            ].map((item, index) => (
              <Card key={index} className="card-hover border-gray-200 bg-white">
                <CardContent className="p-2 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-3 text-xs sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-1">
                    {item.description}
                  </p>
                  <p className="text-gray-500 text-[10px] sm:text-xs">
                    <span className="font-semibold">{item.year}:</span> {item.project}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
    },
    {
      id: "project-phases",
      title: "Rencana Kerja",
      content: (
        <div className="max-w-4xl mx-auto max-h-[450px] sm:max-h-[500px] lg:max-h-none overflow-y-auto">
          <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:p-8 shadow-lg border border-gray-200 mx-1 sm:mx-2 lg:mx-0">
          
            {/* Konten Deskripsi */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-sm text-gray-700">
                Di samping ini adalah daftar pekerjaan yang akan dilakukan. Proses pengerjaan dilaksanakan secara bertahap dibagi 3 fase.
                Kami mengikuti prosedur standar <strong>SDLC</strong> untuk kualitas terbaik. <strong>Setiap Fase Terdiri dari:</strong>
              </p>
      
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                  <li>Kick-off & Finalisasi Requirement</li>
                  <li>Sprint Per Fase</li>
                  <li>Integrasi & Testing</li>
                  <li>UAT & Serah Terima</li>
                </ol>
              </div>
            </div>
      
            {/* Tabel Pekerjaan */}
            <div className="flex flex-col items-center justify-center text-center p-1">
              <table className="table-auto border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-2 py-1">No</th>
                    <th className="border border-gray-300 px-2 py-1">Item Pekerjaan</th>
                    <th className="border border-gray-300 px-2 py-1">Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">1</td>
                    <td className="border border-gray-300 px-2 py-1">Requirement Gathering</td>
                    <td className="border border-gray-300 px-2 py-1">Workshop, wawancara stakeholder, analisis kebutuhan</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">2</td>
                    <td className="border border-gray-300 px-2 py-1">UI/UX Design</td>
                    <td className="border border-gray-300 px-2 py-1">Wireframe, prototype, desain responsif</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">3</td>
                    <td className="border border-gray-300 px-2 py-1">Arsitektur Sistem</td>
                    <td className="border border-gray-300 px-2 py-1">Perancangan database, API, struktur folder</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">4</td>
                    <td className="border border-gray-300 px-2 py-1">Modul Keuangan</td>
                    <td className="border border-gray-300 px-2 py-1">CRUD transaksi, laporan, integrasi dashboard</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">5</td>
                    <td className="border border-gray-300 px-2 py-1">Modul Pengadaan</td>
                    <td className="border border-gray-300 px-2 py-1">Permintaan barang/jasa, proses pembelian, monitoring</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">6</td>
                    <td className="border border-gray-300 px-2 py-1">Modul Inventory</td>
                    <td className="border border-gray-300 px-2 py-1">Pencatatan stok, keluar/masuk barang, integrasi keuangan</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">7</td>
                    <td className="border border-gray-300 px-2 py-1">Dashboard & KPI Monitoring</td>
                    <td className="border border-gray-300 px-2 py-1">Visualisasi data real-time</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">8</td>
                    <td className="border border-gray-300 px-2 py-1">Multi Approval System</td>
                    <td className="border border-gray-300 px-2 py-1">Alur persetujuan bertingkat</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">9</td>
                    <td className="border border-gray-300 px-2 py-1">Data Induk</td>
                    <td className="border border-gray-300 px-2 py-1">Master data perusahaan, supplier, proyek, kategori</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">10</td>
                    <td className="border border-gray-300 px-2 py-1">Setting Sistem</td>
                    <td className="border border-gray-300 px-2 py-1">User management, role, konfigurasi</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">11</td>
                    <td className="border border-gray-300 px-2 py-1">Testing</td>
                    <td className="border border-gray-300 px-2 py-1">Unit test, integration test, UAT</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">12</td>
                    <td className="border border-gray-300 px-2 py-1">Deployment</td>
                    <td className="border border-gray-300 px-2 py-1">Setup server, konfigurasi hosting/cloud</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">13</td>
                    <td className="border border-gray-300 px-2 py-1">Training</td>
                    <td className="border border-gray-300 px-2 py-1">Pelatihan admin dan end-user</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">14</td>
                    <td className="border border-gray-300 px-2 py-1">Dokumentasi</td>
                    <td className="border border-gray-300 px-2 py-1">Panduan teknis & user manual</td>
                  </tr>
                </tbody>
              </table>
            </div>     
          </div>
        </div>
      )
    },
    {
      id: "tech-stack",
      title: "Rencana Teknikal",
      content: (
        <div className="max-w-4xl mx-auto max-h-[450px] sm:max-h-[500px] lg:max-h-none overflow-y-auto">
          <div className="bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:p-8 shadow-lg border border-gray-200 mx-1 sm:mx-2 lg:mx-0">
            
            {/* Icon & Title */}
            <div className="text-center">
              <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
              <Settings className="w-5 h-5 sm:w-10 sm:h-10 text-hexa-red" />
            </div>
            </div>
      
            {/* Grid 2 Kolom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              
              {/* Kolom Kiri */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Frontend</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>React.js (SPA/MPA, scalable UI)</li>
                    <li>Next.js (SSR & SEO-friendly, image optimization, routing rapi)</li>
                    <li>Tailwind CSS (konsistensi desain, cepat styling)</li>
                  </ul>
                </div>
      
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Backend</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Node.js + NestJS (arsitektur modular, dependency injection, cocok untuk skala enterprise)</li>
                    <li>Express.js (opsional: lebih ringan, tapi NestJS lebih rapi jangka panjang)</li>
                    <li>GraphQL atau REST API (GraphQL untuk query fleksibel, REST untuk endpoint fixed)</li>
                  </ul>
                </div>
      
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Database</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>PostgreSQL (relasional, dukungan JSONB untuk semi-structured data, cocok multi-tenant)</li>
                    <li>Prisma ORM (type safety, migrasi DB mudah, kompatibel dengan PostgreSQL)</li>
                  </ul>
                </div>
              </div>
      
              {/* Kolom Kanan */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4. Infrastruktur & Hosting</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Docker (isolasi environment, memudahkan deployment ke server mana pun)</li>
                    <li>Kubernetes (K8s) (opsional: untuk skala besar, orchestration container)</li>
                    <li>NGINX (reverse proxy, load balancing)</li>
                  </ul>
                </div>
      
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5. Keamanan</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>JWT + Refresh Token (autentikasi aman)</li>
                    <li>SSL/TLS (enkripsi data in transit)</li>
                  </ul>
                </div>
      
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6. DevOps & CI/CD</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>GitHub Actions (pipeline otomatis untuk build, test, dan deploy)</li>
                  </ul>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      )
      },
    {
      id: "timeline",
      title: "Rencana Timeline",
      content: (
        <div className="max-w-4xl mx-auto max-h-[450px] sm:max-h-[500px] lg:max-h-none overflow-y-auto">
          <p className="mb-6 text-base sm:text-lg">
            Pengerjaan dilaksanakan dalam 4 fase, dengan estimasi total 4–5 bulan
            sampai dengan proses implementasi.
          </p>
    
          {/* Tabel Timeline */}
          <table className="table-auto border-collapse border border-gray-300 text-xs sm:text-sm md:text-base w-full max-w-5xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-1 sm:px-2 py-1">Fase</th>
                <th className="border border-gray-300 px-1 sm:px-2 py-1">Fokus Pekerjaan</th>
                <th className="border border-gray-300 px-1 sm:px-2 py-1">Modul / Aktivitas Utama</th>
                <th className="border border-gray-300 px-1 sm:px-2 py-1">Durasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Phase 1 – Inception & Design
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Analisis kebutuhan dan desain UI/UX
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Requirement Gathering, UI/UX Design, Arsitektur Sistem
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">5 minggu</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Phase 2 – Core Development
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Pengembangan modul utama
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Keuangan, Pengadaan, Inventory
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">9 minggu</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Phase 3 – Extended Modules
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Pengembangan modul tambahan & integrasi
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Dashboard & KPI, Multi Approval System, Data Induk, Setting Sistem
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">6 minggu</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Phase 4 – Testing & Deployment
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  Pengujian, deployment, dan training
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">
                  QA, UAT, Deployment, Training, Dokumentasi
                </td>
                <td className="border border-gray-300 px-1 sm:px-2 py-1">5 minggu</td>
              </tr>
            </tbody>
          </table>
    
          {/* Sisipkan gambar Gantt Chart */}
          <img
            src="https://hexaintegra.com/wp-content/uploads/2025/08/Ghantchart.png" // ganti dengan path gambar kamu
            alt="Gantt Chart Pengerjaan"
            className="mt-6 max-w-full h-auto rounded-lg shadow"
          />
        </div>
      )
      },
      {
      id: "rencana-strategis",
      title: "Rencana Strategis",
      content: (
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
              <Target className="w-5 h-5 sm:w-10 sm:h-10 text-hexa-red" />
            
              <ul className="list-disc list-inside max-w-3xl text-sm sm:text-base space-y-2 text-left">
                <li>
                  <strong>Fase Awal:</strong> Fokus pada modul yang paling krusial
                  (Keuangan, Pengadaan, Inventory) untuk percepatan pengerjaan.
                </li>
                <li>
                  <strong>Integrasi Bertahap:</strong> Setiap modul diuji dan
                  diintegrasikan ke sistem live sebelum fase berikutnya.
                </li>
                <li>
                  <strong>User-Centric Development:</strong> Setiap akhir sprint
                  dilakukan review dengan user untuk memastikan kebutuhan terpenuhi.
                </li>
                <li>
                  <strong>Scalability:</strong> Arsitektur disiapkan untuk
                  multi-company &amp; multi-user tanpa mengubah core sistem.
                </li>
                <li>
                  <strong>Keamanan Data:</strong> Implementasi best-practice keamanan
                  data &amp; audit trail.
                </li>
                <li>
                  <strong>Training &amp; Handover:</strong> Menjamin transisi smooth
                  dari tim development ke tim operasional klien.
                </li>
              </ul>
            </div>
          </Card>
        </div>
      )
    },
    {
    id: "estimation",
    title: "Estimasi Biaya",
    content: (
      <div className="max-w-4xl mx-auto">
        <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
          <CardContent className="p-4 sm:p-12 text-center">
            <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
              <DollarSign className="w-3 h-3 sm:w-8 sm:h-8 text-hexa-red" />
            </div>
            <h3 className="text-sm sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
              Estimasi Biaya Pengembangan
            </h3>
            <p className="text-xs sm:text-lg text-gray-600 leading-relaxed">
              Demi kenyamanan dan transparansi, detail estimasi biaya akan kami
              sampaikan melalui dokumen terpisah yang mudah dibaca (PDF atau format
              lain yang sesuai).
            </p>
          </CardContent>
        </Card>
      </div>
      )
    },
    {
      id: "gambar-prototype1",
      title: "Prototype Design 1",
      content: (
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2025/08/SamugaraPT-Picture1.jpg"
              alt="Contoh Gambar"
              className="max-h-[400px] w-auto object-contain mx-auto"
            />
          </Card>
        </div>
      )
    },
{
      id: "gambar-prototype2",
      title: "Prototype Design 2",
      content: (
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2025/08/SamugaraPT-Picture2.jpg"
              alt="Contoh Gambar"
              className="max-h-[400px] w-auto object-contain mx-auto"
            />
          </Card>
        </div>
      )
    },
{
      id: "gambar-prototype3",
      title: "Prototype Design 3",
      content: (
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2025/08/SamugaraPT-Picture3.jpg"
              alt="Contoh Gambar"
              className="max-h-[400px] w-auto object-contain mx-auto"
            />
          </Card>
        </div>
      )
    },
{
      id: "gambar-prototype4",
      title: "Prototype Design 4",
      content: (
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2025/08/SamugaraPT-Picture4.jpg"
              alt="Contoh Gambar"
              className="max-h-[400px] w-auto object-contain mx-auto"
            />
          </Card>
        </div>
      )
    },
{
      id: "gambar-prototype5",
      title: "Prototype Design 5",
      content: (
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2025/08/SamugaraPT-Picture5.jpg"
              alt="Contoh Gambar"
              className="max-h-[400px] w-auto object-contain mx-auto"
            />
          </Card>
        </div>
      )
    },
    {
      id: "gambar-prototype6",
      title: "Prototype Design 6",
      content: (
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2025/08/SamugaraPT-Picture6.jpg"
              alt="Contoh Gambar"
              className="max-h-[400px] w-auto object-contain mx-auto"
            />
          </Card>
        </div>
      )
    },
    {
      id: "gambar-prototype7",
      title: "Prototype Design 7",
      content: (
        <div className="max-w-4xl mx-auto flex justify-center">
          <Card className="card-hover border-gray-200 animate-scale-in bg-white mx-2 sm:mx-0">
            <img
              src="https://hexaintegra.com/wp-content/uploads/2025/08/SamugaraPT-Picture7.jpg"
              alt="Contoh Gambar"
              className="max-h-[400px] w-auto object-contain mx-auto"
            />
          </Card>
        </div>
      )
    },
    {
      id: "prototype-design",
      title: "Prototype Design",
      content: (
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
              <HandHeart className="w-5 h-5 sm:w-10 sm:h-10 text-hexa-red" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Prototype ini memberikan gambaran awal tentang tampilan dan alur penggunaan aplikasi sebelum tahap pengembangan penuh. 
              Desain ini membantu memvisualisasikan fitur, memastikan pengalaman pengguna yang intuitif, 
              serta mempermudah komunikasi ide antara tim developer dan stakeholder.<br /><br /> Untuk melihat versi <strong>clickable</strong>, silakan klik tautan berikut:{" "}
              <a
                href="https://samapp-hexa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hexa-red font-semibold hover:underline"
              >
                <br /><br />samapp-hexa.vercel.app<br />
              </a>
            </p>
          </div>
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
              pengembangan aplikasi terintegrasi ini.
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
              <div className="w-6 h-6 sm:w-16 sm:h-16 bg-hexa-red/10 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
              <BriefCase className="w-5 h-5 sm:w-10 sm:h-10 text-hexa-red" />
            </div>
              
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
            <p className="text-gray-700 text-sm sm:text-base">
              Klik tautan berikut untuk melihat proposal dalam format PDF:{" "}
              <a
                href="https://drive.google.com/file/d/1wPFoAxPdjcDkokuj0N-KsY_5agu4gGkN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hexa-red font-semibold hover:underline"
              >
                Unduh Proposal PDF
              </a>
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
