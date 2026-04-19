import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function ChairmanMessage() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/chairman/1920/600')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Chairman's Message</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">About Us</span>
             <span>/</span>
             <span className="text-white">Chairman Message</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -top-10 -left-10 w-full h-full border-4 border-primary rounded-2xl group-hover:top-0 group-hover:left-0 transition-all duration-500 -z-0" />
                <img 
                  src="https://picsum.photos/seed/owner/800/1000" 
                  className="w-full rounded-2xl shadow-2xl relative z-10" 
                  alt="Chairman"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-10 right-10 bg-primary p-6 text-white z-20 rounded-sm shadow-xl">
                   <h4 className="text-2xl font-black italic">Salah Uddin</h4>
                   <p className="text-xs font-bold uppercase tracking-widest text-white/70">Owner/CEO, S.B Sourcing</p>
                </div>
             </div>

             <div className="w-full lg:w-1/2">
                <Quote size={60} className="text-primary/20 mb-6" />
                <h2 className="text-4xl font-black text-secondary mb-10 leading-tight">
                  Driving Excellence Through 18 Years of Experience and Integrity.
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium italic">
                  <p>
                    "Our unique vision, mission and values capture the essence of who we are and how we interact with one another. 
                    In addition, it speaks to how we go to market and our commitment to delivering excellence to our customer."
                  </p>
                  <p>
                    "Having worked for 18 years in major buying offices like Li & Fung and C&A, I realized that the core of this business is trust and quality. 
                    At S.B Sourcing, we don't just export garments; we build long-lasting partnerships based on reliability and excellence."
                  </p>
                  <p>
                    "We are committed to ethical manufacturing and sustainable sourcing. Every garment that leaves our facility carries our 
                    promise of quality and precision. We look forward to working with you and proving our dedication to your brand's success."
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                   <div className="w-16 h-[2px] bg-primary"></div>
                   <span className="font-bold text-secondary uppercase tracking-widest text-sm">Best Regards, Shopon</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
