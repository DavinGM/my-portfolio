import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { portfolioData } from '../mock';
import { toast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Subjek email
  const subject = `Pesan dari ${formData.name}`;

  // Isi email (body)
  const body = 
`Dari: ${formData.email}
Nama: ${formData.name}

Pesan:
${formData.message}`;

  // Encode hanya untuk Gmail URL
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=your_email@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Fallback ke mail client biasa
  const mailtoURL = `mailto:your_email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Buka Gmail di tab baru
  try {
    window.open(gmailURL, '_blank');
  } catch {
    window.location.href = mailtoURL;
  }

  toast({
    title: "Mengarahkan ke Gmail...",
    description: "Pesan kamu akan dikirim via Gmail.",
  });

  // Reset form
  setFormData({ name: '', email: '', message: '' });
};

  const socialLinks = [
    { icon: Github, url: portfolioData.socials.github, name: 'GitHub' },
    { icon: Linkedin, url: portfolioData.socials.linkedin, name: 'LinkedIn' },
    { icon: Instagram, url: portfolioData.socials.instagram, name: 'Instagram' },
    { icon: Facebook, url: portfolioData.socials.facebook, name: 'Facebook' },
    { icon: Twitter, url: portfolioData.socials.twitter, name: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-[#8B5CF6]">Hubungi</span>saya
            </h2>
            <p className="text-gray-400 text-lg">Mari bekerja sama pada proyek Anda berikutnya</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
                <p className="text-gray-400 leading-relaxed">
                Saya selalu membuka forum diskusi dan peluang baru. Jangan ragu untuk menghubungi saya melalui email atau Whatsapp saya. ayo bergangung di project berikutnya!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="bg-[#1a1a1a] border-[#2d2d2d] p-4 hover:border-[#8B5CF6] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#8B5CF6]/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">davin.gm.etc@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#1a1a1a] border-[#2d2d2d] p-4 hover:border-[#8B5CF6] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#8B5CF6]/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{portfolioData.profile.location}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-medium mb-4">Ikuti</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1a1a1a] border border-[#2d2d2d] p-3 rounded-lg hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300 group"
                      >
                        <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-[#1a1a1a] border-[#2d2d2d] p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nama
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="nama anda"
                    required
                    className="bg-[#0f0f10] border-[#2d2d2d] text-white placeholder:text-gray-500 focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="kamu.email@example.com"
                    required
                    className="bg-[#0f0f10] border-[#2d2d2d] text-white placeholder:text-gray-500 focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="katakan saja di sini ."
                    required
                    rows={6}
                    className="bg-[#0f0f10] border-[#2d2d2d] text-white placeholder:text-gray-500 focus:border-[#8B5CF6] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8B5CF6] hover:bg-[#A855F7] text-white py-6 text-lg transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;