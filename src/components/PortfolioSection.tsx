
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, Shield, Database, Ship, Users, BarChart, GraduationCap, BookOpen, MapPin } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      icon: Shield,
      title: "Surat Izin Kerja Aman Elektronik",
      client: "Pertamina Lomanis",
      location: "Cilacap",
      year: "2024",
      description: "Sistem elektronik untuk pengelolaan surat izin kerja aman dengan workflow approval dan monitoring real-time untuk keselamatan kerja.",
      tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
      category: "Safety System"
    },
    {
      icon: Users,
      title: "Aplikasi Absensi dan Kepegawaian",
      client: "Sekolah Islam Permata Sunnah",
      location: "Sidoarjo",
      year: "2024",
      description: "Sistem manajemen absensi digital dan kepegawaian dengan fitur face recognition, payroll otomatis, dan reporting.",
      tech: ["React", "Node.js", "PostgreSQL", "Face Recognition"],
      category: "HRM System"
    },
    {
      icon: MapPin,
      title: "SIMANJA 3.0 - Sistem Informasi Pengawasan Jalan dan Jembatan",
      client: "Dinas PU Bina Marga Prov. Jatim",
      location: "Surabaya",
      year: "2023",
      description: "Sistem monitoring dan pengawasan kondisi jalan dan jembatan se-Jawa Timur dengan teknologi GIS dan mobile inspection.",
      tech: ["Angular", "Laravel", "PostgreSQL", "GIS"],
      category: "Government System"
    },
    {
      icon: Ship,
      title: "Sistem Informasi Agensi Pelayaran",
      client: "PT. Oremus Bahari Mandiri",
      location: "Surabaya",
      year: "2010 – 2023",
      description: "Sistem komprehensif untuk manajemen agensi pelayaran meliputi scheduling, cargo tracking, dan document management.",
      tech: ["PHP", "MySQL", "jQuery", "Bootstrap"],
      category: "Shipping System"
    },
    {
      icon: Database,
      title: "Ship Monitoring System",
      client: "PT. Global Eka Marine",
      location: "Surabaya",
      year: "2018 – 2020",
      description: "Sistem monitoring kapal real-time dengan GPS tracking, fuel monitoring, dan maintenance scheduling untuk fleet management.",
      tech: ["React", "Node.js", "MongoDB", "IoT"],
      category: "Fleet Management"
    },
    {
      icon: BarChart,
      title: "Sistem Payroll & Attendance",
      client: "KCT Group Indonesia",
      location: "Surabaya",
      year: "2019 – 2020",
      description: "Sistem payroll dan absensi terintegrasi dengan biometric attendance dan automated payroll calculation.",
      tech: ["Laravel", "Vue.js", "MySQL", "Biometric API"],
      category: "HRM System"
    },
    {
      icon: Building,
      title: "Sistem Informasi Harga Konstruksi",
      client: "Dinas PU Bina Marga Prov. Jatim",
      location: "Surabaya",
      year: "2023",
      description: "Database harga konstruksi jalan dan jembatan dengan analisis inflasi dan prediksi harga material konstruksi.",
      tech: ["React", "Laravel", "PostgreSQL", "Chart.js"],
      category: "Price Information System"
    },
    {
      icon: GraduationCap,
      title: "Sistem Informasi LBB",
      client: "LBB Taruna Cendekia",
      location: "Sidoarjo",
      year: "2021-2022",
      description: "Sistem manajemen lembaga bimbingan belajar dengan fitur scheduling, payment, progress tracking, dan communication.",
      tech: ["Laravel", "Bootstrap", "MySQL", "Payment Gateway"],
      category: "Education System"
    },
    {
      icon: BookOpen,
      title: "SSC Buduran",
      client: "Rayyan Cendekia Utama",
      location: "Sidoarjo",
      year: "2023",
      description: "Sistem manajemen paket pembelajaran dan aplikasi tryout online Lembaga Bimbingan Belajar Sony Sugema College.",
      tech: ["React", "Express.js", "PostgreSQL", "Socket.io"],
      category: "Tutor Agency Management"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-gray-900 mb-6">
            Portofolio Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beberapa proyek yang telah kami kerjakan dengan sukses untuk berbagai klien 
            dari berbagai industri.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-gray-200 h-full animate-scale-in bg-white">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-hexa-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-6 h-6 text-hexa-red" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-hexa-red bg-hexa-red/10 rounded-full px-2 py-1 mb-2 inline-block">
                      {project.category}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">{project.title}</h3>
                    <p className="text-sm text-hexa-red font-medium">{project.client}</p>
                    <p className="text-xs text-gray-500">{project.location} • {project.year}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
               
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-hexa-red hover:bg-hexa-red/90 text-white px-8 py-3"
            onClick={() => window.open('https://hexaintegra.com/portfolio', '_blank')}
          >
            Lihat Portfolio Lengkap
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
