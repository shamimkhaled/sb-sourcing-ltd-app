import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import howWeWorkProcess from '../assets/img/how-we-work-process.png';

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div 
               initial={{ opacity: 0, rotate: -10 }}
               whileInView={{ opacity: 1, rotate: 0 }}
               transition={{ duration: 1 }}
               className="relative"
            >
              {/* This mimics the circular flow image from the reference */}
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-full border-[20px] border-gray-50 flex items-center justify-center p-8 bg-white shadow-2xl">
                 <img 
                    src={howWeWorkProcess}
                    alt="Process Flow" 
                    className="w-full h-full object-contain"
                 />
                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl shadow-xl animate-bounce">18+ <br/><span className="text-[8px] uppercase">Years</span></div>
              </div>
              
              {/* Background Shapes */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative inline-block mb-6">
              <span className="text-primary font-bold uppercase tracking-widest text-sm relative pl-12 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[2px] after:bg-primary">
                S.B SOURCING
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-secondary leading-tight">
              How We Work
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
              <p>
                S.B Sourcing developing team take great care to ensure the quality, desired weight, construction and color, 
                we evaluate the capacity and capability of every factory. We also check environmental control, 
                safety laws, labor practices and adherence to labor laws.
              </p>
              <p>
                We make sure that our supplier can meet our requirements when it comes to reaching the average 
                number of pieces produced as per buyer's requirement at a given period to meet schedule.
              </p>
            </div>
            <Link
              to="/our-service"
              className="inline-block bg-secondary hover:bg-primary text-white px-10 py-4 rounded-sm font-bold uppercase transition-all shadow-xl"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Particle Image (mimics reference) */}
      <img 
        src="https://www.lamia-fashion.com/wp-content/uploads/2021/01/h4-shape-section-03.png"
        className="absolute bottom-0 right-0 w-1/4 opacity-10 pointer-events-none"
        alt=""
        referrerPolicy="no-referrer"
      />
    </section>
  );
}
