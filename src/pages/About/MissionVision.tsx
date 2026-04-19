import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function MissionVision() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/mv/1920/600')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Mission, Vision & Values</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">About Us</span>
             <span>/</span>
             <span className="text-white">Mission & Vision</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-24">
            {/* Intro */}
            <div className="text-center">
               <p className="text-2xl font-serif italic text-gray-600 leading-relaxed">
                 "Our unique vision, mission and values capture the essence of who we are and how we interact with one another. 
                 It speaks to how we go to market and our commitment to delivering excellence to our customer."
               </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 bg-[#fcf8f5] rounded-full flex items-center justify-center text-primary shadow-xl border-t-4 border-primary">
                    <Target size={64} />
                  </div>
               </div>
               <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-black text-secondary mb-6 flex items-center gap-4">
                    OUR MISSION
                    <span className="h-[2px] flex-grow bg-gray-100"></span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To serve our customer by providing the highest quality professional services that address their business issue. 
                    We attract, recruit, and retain the most knowledgeable and passionate professionals, as we provide a 
                    collaborative culture the enables them to thrive professionally and personally.
                  </p>
               </div>
            </div>

            {/* Vision */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
               <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 bg-[#fcf8f5] rounded-full flex items-center justify-center text-primary shadow-xl border-t-4 border-primary">
                    <Eye size={64} />
                  </div>
               </div>
               <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-black text-secondary mb-6 flex items-center gap-4">
                    <span className="h-[2px] flex-grow bg-gray-100"></span>
                    OUR VISION
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed text-right md:text-left">
                    To be the most trusted and respected professional garments sourcing firm recognized by our clients for delivering excellence. 
                    We aim to redefine the global standard of supply chain management through integrity and innovation.
                  </p>
               </div>
            </div>

            {/* Values */}
            <div className="bg-secondary p-12 lg:p-20 rounded-[40px] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
               <div className="relative z-10">
                  <h2 className="text-4xl font-black mb-12 text-center">OUR CORE VALUES</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                     {[
                       { title: 'Integrity', desc: 'We do the right thing regardless of the consequence.' },
                       { title: 'Pursuit of Excellence', desc: 'We continually strive to exceed the expectations of our people and our customer.' },
                       { title: 'Accountability', desc: 'We take responsibility for individual and collective actions.' },
                       { title: 'Collaboration', desc: 'We work together to achieve common and individual goals.' },
                       { title: 'Passion', desc: 'Our energy and enthusiasm is contagious. We are inspired to make a lasting impact.' },
                       { title: 'Transparency', desc: 'Building trust through open and honest communication with all stakeholders.' }
                     ].map((item, i) => (
                       <div key={i} className="space-y-4">
                          <h4 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                             <ShieldCheck size={18} /> {item.title}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
