import { motion } from 'motion/react';
import { Settings, CheckSquare, Factory, BarChart3 } from 'lucide-react';
import { banners, pexelsPhoto } from '../../constants/stockImages';

const stats = [
  { label: 'Flat Knitwear (Sweater)', value: '5 Million', suffix: 'pcs/year', icon: <Settings size={28} /> },
  { label: 'Circular Knitwear', value: '50 Million', suffix: 'pcs/year', icon: <BarChart3 size={28} /> },
  { label: 'Woven Wear', value: '10 Million', suffix: 'pcs/year', icon: <Factory size={28} /> }
];

export default function Capabilities() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${banners.productionOverview}')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Our Capabilities</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">About Us</span>
             <span>/</span>
             <span className="text-white">Our Capabilities</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-4xl font-black text-secondary mb-8">Production Capacity & Expertise</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a network of more than <strong className="text-primary text-2xl">20+</strong> manufacturing factories for our regular production, 
              we boast an impressive product capacity across all segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             {stats.map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-[#fcf8f5] p-10 rounded-2xl border-t-4 border-primary text-center group hover:bg-primary transition-all duration-500"
               >
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-lg group-hover:bg-white/20 group-hover:text-white transition-all">
                   {stat.icon}
                 </div>
                 <div className="text-4xl font-black text-secondary mb-2 group-hover:text-white transition-colors">{stat.value}</div>
                 <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-white/70 transition-colors">{stat.suffix}</div>
                 <h4 className="text-lg font-bold text-secondary group-hover:text-white transition-colors">{stat.label}</h4>
               </motion.div>
             ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h3 className="text-3xl font-black text-secondary">Expertise in Specialized Segments</h3>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                   <p>
                     Every season, we develop around <strong>400 styles</strong> of sweaters, pullovers, and cardigans, 
                     giving our customers a wide range of options.
                   </p>
                   <ul className="space-y-4">
                      {[
                        'Product gauge for sweaters: 1.5, 3, 5, 7, 10, 12, and 14 gauges',
                        'Certified by BSCI, SEDEX, ACCORD, OEKO-TEX, and GOTS',
                        'Quality standard: AQL 1.5 – 2.5 or custom according to buyer requirement',
                        'Dedicated teams for Inline, Middle & Final inspections',
                        'Versatile production units for Woven, Knit, and Sweater'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                           <CheckSquare size={20} className="text-primary flex-shrink-0 mt-1" />
                           <span className="font-semibold text-secondary/80">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
             <div className="relative">
                <img 
                  src={pexelsPhoto(6626903, 1200)} 
                  className="rounded-2xl shadow-2xl overflow-hidden" 
                  alt="Production Floor"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-2xl shadow-xl text-white max-w-xs">
                   <span className="text-5xl font-black block mb-2 pointer-events-none">20+</span>
                   <span className="text-sm font-bold uppercase tracking-widest opacity-80">Manufacturing Factory Network</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
