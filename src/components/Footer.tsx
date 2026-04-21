import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, ChevronRight, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company ID */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 border-2 border-primary rotate-12 group-hover:rotate-0 transition-transform font-black text-2xl">
                 <span className="text-secondary -translate-x-1">S</span>
                 <span className="text-primary translate-x-1">B</span>
              </div>
              <div className="leading-none">
                <div className="flex items-baseline">
                  <span className="text-2xl font-black text-white tracking-tighter">S.B</span>
                  <span className="text-2xl font-black text-primary tracking-tighter ml-1">SOURCING</span>
                </div>
                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-0.5">Exporter & Manufacturer</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              S.B Sourcing is a leading garments buying house and manufacturer in Bangladesh. 
              We provide high-quality clothing solutions for global clients with 18 years of 
              professional merchandising experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"><Youtube size={18} /></a>
            </div>
            <div className="space-y-2 pt-4">
              <h4 className="font-bold flex items-center gap-2"><Clock size={16} className="text-primary" /> Open Hours:</h4>
              <p className="text-gray-400 text-sm">Sat – Thu: 10 am – 6 pm</p>
              <p className="text-gray-400 text-sm">Friday: Closed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Company Profile', path: '/company-profile' },
                { name: 'Our Mission & Vision', path: '/mission-vision-values' },
                { name: 'Chairman Message', path: '/chairman-md-message' },
                { name: 'Our Capabilities', path: '/our-capabilities' },
                { name: 'Our Service', path: '/our-service' },
                { name: 'Contact Us', path: '/contact-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">Official Address</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div className="text-gray-400 text-sm">
                  <p className="font-bold text-white mb-1">Corporate Office</p>
                  House # 159/A/1, Road # 3, Mohammadia Housing Limited, Mohammadpur, Dhaka- 1207, Bangladesh
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="text-gray-400 text-sm">
                  <p className="font-bold text-white mb-1">Phone & WhatsApp</p>
                  +88 01619 153138
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="text-gray-400 text-sm">
                  <p className="font-bold text-white mb-1">Email Support</p>
                  sbsourcingltdbd@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold tracking-wider">
          <p>© {currentYear} S.B SOURCING. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
