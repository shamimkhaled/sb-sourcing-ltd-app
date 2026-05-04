import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Search } from 'lucide-react';
import { banners } from '../constants/stockImages';

export default function ContactUs() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${banners.knitwearDisplay}')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Contact Us</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
             <div className="bg-[#fcf8f5] p-10 rounded-2xl border-b-4 border-primary text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-xl border-t-2 border-primary">
                   <Phone size={32} />
                </div>
                <h3 className="text-xl font-black text-secondary mb-4 uppercase italic">Phone & WhatsApp</h3>
                <p className="text-gray-600 font-bold">+88 01619 153138</p>
                <p className="text-gray-400 text-sm">Mon-Fri (09:00 - 18:00)</p>
             </div>

             <div className="bg-primary p-10 rounded-2xl text-white text-center shadow-2xl scale-110 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl border-t-4 border-white/40">
                   <MapPin size={32} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase italic">Our Address</h3>
                <p className="font-bold">House # 159/A/1, Road # 3, Mohammadia Housing Limited, Mohammadpur, Dhaka- 1207, Bangladesh</p>
             </div>

             <div className="bg-[#fcf8f5] p-10 rounded-2xl border-b-4 border-primary text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-xl border-t-2 border-primary">
                   <Mail size={32} />
                </div>
                <h3 className="text-xl font-black text-secondary mb-4 uppercase italic">Email Support</h3>
                <div className="space-y-2 text-gray-600 font-bold">
                  <p>
                    <a
                      href="mailto:shopon@sbsourcing-bd.com"
                      className="hover:text-primary transition-colors break-all"
                    >
                      shopon@sbsourcing-bd.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:sbsourcingltdbd@gmail.com"
                      className="hover:text-primary transition-colors break-all"
                    >
                      sbsourcingltdbd@gmail.com
                    </a>
                  </p>
                </div>
                <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
             </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
             <div className="w-full lg:w-1/2 space-y-10">
                <div>
                   <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Tell us something</span>
                   <h2 className="text-4xl font-black text-secondary">Have a project in mind? <br /> Let's connect.</h2>
                   <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                     Whether you are looking for specific garment sourcing or need full-scale manufacturing support, 
                     our team of experts is ready to assist you. S.B Sourcing is your reliable partner in Bangladesh.
                   </p>
                </div>
                <div className="p-8 bg-secondary rounded-2xl text-white">
                   <div className="flex items-center gap-6 mb-8">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                         <Search size={24} />
                      </div>
                      <h4 className="text-xl font-bold uppercase">Sourcing Specialist</h4>
                   </div>
                   <p className="text-white/70 italic text-lg leading-relaxed">
                     "With 18 years of experience in global brands like Li & Fung and C&A, 
                     I personally oversee the quality of every order. Hope to proof our service to you."
                   </p>
                   <div className="mt-6 flex items-center gap-4">
                      <div className="w-10 h-[2px] bg-primary"></div>
                      <span className="font-bold text-sm uppercase tracking-widest">Shopon, Owner</span>
                   </div>
                </div>
             </div>

             <div className="w-full lg:w-1/2">
                <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 grayscale hover:grayscale-0 transition-all duration-700">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.604248432322!2d90.3541738!3d23.753389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf60fd72798b%3A0xc48c66e74457df66!2sMohammadia%20Housing%20Limited!5e0!3m2!1sen!2sbd!4v1713500000000!5m2!1sen!2sbd" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
