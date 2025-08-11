
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, Calendar } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda kembali.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-hexa-light">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-gradient-red mb-6">
            Hubungi Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mari berdiskusi lebih lanjut mengenai kebutuhan pengembangan aplikasi terintegrasi Anda.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-fade-in-left">
            <Card className="bg-white shadow-xl border-0 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-hexa-red mb-6">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="icon-container">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hexa-red mb-2">Hexa Integra Mandiri Workshop</h4>
                    <p className="text-gray-600">
                      Jalan Bukit Kismadani, Kompleks Balai RW 13<br />
                      Bluru Kidul, Kec. Sidoarjo, Jawa Timur
                      Telepon: 0821 4355 8433
                      Email: halo@hexaintegra.com
                    </p>
                  </div>
                </div>
                                           
                <div className="flex items-start gap-4">
                  <div className="icon-container">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hexa-red mb-2">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00 WIB</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-hexa-red/10 to-hexa-gold/10 rounded-xl p-6 border border-hexa-gold/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-hexa-red" />
                    <h4 className="font-semibold text-hexa-red">Jadwalkan Janji Temu</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Hubungi kami untuk mengatur pertemuan dan konsultasi gratis mengenai kebutuhan IT perusahaan Anda.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="lg:col-span-1 animate-fade-in-up">
            <div className="h-full flex items-center justify-center">
              <img 
                src="https://hexaintegra.com/wp-content/uploads/2024/10/Group-20-1-2048x1445.webp" 
                alt="Hexa Integra Team"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-1 animate-fade-in-right">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-hexa-red mb-6">Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-hexa-gray focus:ring-hexa-red focus:border-hexa-red"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-hexa-gray focus:ring-hexa-red focus:border-hexa-red"
                      placeholder="nama@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-hexa-gray focus:ring-hexa-red focus:border-hexa-red"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="border-hexa-gray focus:ring-hexa-red focus:border-hexa-red"
                      placeholder="Jelaskan kebutuhan proyek Anda atau pertanyaan yang ingin Anda sampaikan..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-hexa-red hover:bg-hexa-red/90 text-white py-3"
                  >
                    Kirim Pesan
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
