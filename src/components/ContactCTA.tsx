import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="font-bold uppercase tracking-widest text-white/70 text-sm mb-4 block">When You Make it</span>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Lets Make Today <br /> Your Business
            </h2>
            <p className="text-xl font-medium text-white/80 italic">
               Your business will be better forever
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact-us"
              className="bg-white text-primary px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-all shadow-2xl"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-black/5 -skew-x-12 -translate-x-1/4" />
    </section>
  );
}
