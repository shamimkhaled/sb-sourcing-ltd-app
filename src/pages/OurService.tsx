import { Handshake, Search, Package, ClipboardCheck, Ship, Headphones, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { banners, pexelsPhoto } from '../constants/stockImages';

const fullServices = [
  {
    title: 'Supplier Credibility',
    desc: 'S.B Sourcing developing team take great care to ensure the quality, desired weight, construction and color, we evaluate the capacity and capability of every factory. We also check environmental control, safety laws, labor practices and adherence to labor laws.',
    icon: <Handshake size={48} />
  },
  {
    title: 'Sourcing',
    desc: 'S.B Sourcing maintains strong exclusive relationships with yarn and fabric mills plus accessories suppliers locally and globally. Our sourcing service includes factory sourcing, social audit support, inline and final inspection, QC support, testing coordination, and shipping follow-up to ensure premium quality at competitive cost.',
    icon: <Search size={48} />
  },
  {
    title: 'Sampling',
    desc: 'We develop and provide samples as per buyers’ design, fabric quality, weight, shrinkage, color fastness, specifications etc. within 7-10 days. Our sample development center is equipped with the latest machinery to ensure high accuracy.',
    icon: <Package size={48} />
  },
  {
    title: 'Quality Control / Assurance',
    desc: 'Our Quality Controllers visit the factory regularly to make sure we meet our buyer’s requirements. Our quality control personnel are stationed at all manufacturing sites to ensure that all production will meet according to buyer’s requirement.',
    icon: <ClipboardCheck size={48} />
  },
  {
    title: 'Packaging & Logistics',
    desc: 'Only approved goods are packed and buyer is assured of getting quality merchandise. Care is also taken to see whether all packing instructions of the buyer are respected, including barcode scanning and precise box labeling.',
    icon: <Package size={48} />
  },
  {
    title: 'Shipment/Cargo Handling',
    desc: 'All shipping documents are reviewed and verified as per buyer instruction. All cargo is handled by reputable forwarders to obtain correct information regarding ETD and ETA of vessels because time delivery is as important for us as it is to the buyer.',
    icon: <Ship size={48} />
  }
];

export default function OurService() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${banners.workshop}')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Our Services</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">Our Services</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {fullServices.map((service, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 className="flex flex-col md:flex-row gap-8 p-10 bg-[#fcf8f5] rounded-3xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
               >
                 <div className="w-24 h-24 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                    {service.icon}
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl font-black text-secondary">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] font-medium">
                       {service.desc}
                    </p>
                 </div>
               </motion.div>
             ))}
          </div>

          <div className="mt-24 bg-secondary rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
             <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                   <h2 className="text-4xl font-black mb-8 leading-tight">Why Choose Our Professional Sourcing?</h2>
                   <p className="text-white/70 text-lg mb-10 leading-relaxed">
                     We bridge the gap between global buyers and local manufacturing excellence. 
                     Our multi-layered approach ensures that your brand receives only the best.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        'Transparent Pricing',
                        'Strict AQL Standards',
                        'Ethical Sourcing',
                        'Expert Merchandisers',
                        'In-house Technical Support',
                        'Reliable Logistics'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <CheckCircle2 className="text-primary" size={20} />
                           <span className="font-bold text-sm">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative">
                      <img 
                        src={pexelsPhoto(3738088, 1200)} 
                        className="rounded-3xl shadow-2xl" 
                        alt="Support"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl text-secondary">
                        <div className="flex items-center gap-4">
                           <Headphones size={40} className="text-primary" />
                           <div>
                              <p className="text-xs font-black uppercase tracking-widest text-gray-400">Quick Response</p>
                              <p className="text-xl font-black">24/7 Service</p>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
