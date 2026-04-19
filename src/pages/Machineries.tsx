import { motion } from 'motion/react';
import { banners } from '../constants/stockImages';

const machineryGroups = [
  {
    title: 'Knitting Auto Jacquard Machines',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/Knitting_Auto_Jacquard_machines.jpg'
  },
  {
    title: 'Linking Machines',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/linking_machines.jpg'
  },
  {
    title: 'Flat Knitting Machine',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/flat_knitting_machine.jpg'
  },
  {
    title: 'Dying Machine',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/Dying_machine.jpg'
  },
  {
    title: 'Production Floor',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/production_floor.jpg'
  },
  {
    title: 'Quality Check',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/quality_check.jpg'
  },
  {
    title: 'Finishing Process',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/finishing_process.jpg'
  },
  {
    title: 'Finishing & Box Process',
    image: 'https://www.lamia-fashion.com/wp-content/uploads/2025/07/finishing_box_process.jpg'
  }
];

export default function Machineries() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${banners.workshop}')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Production Machineries</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">Machineries</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
             {machineryGroups.map((group, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="space-y-8"
               >
                 <div className="flex items-center gap-6">
                    <span className="w-12 h-[4px] bg-primary hidden md:block"></span>
                    <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter">{group.title}</h2>
                 </div>
                 <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-[#fcf8f5]">
                    <img 
                      src={group.image} 
                      alt={group.title} 
                      className="w-full h-auto hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
