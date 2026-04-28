import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import aboutProductsFlatlay from '../assets/img/about-products-flatlay.png';
import knitMensTshirt01 from '../assets/img/products/mens/knit-mens-tshirt-01.png';
import knitMensCargo05 from '../assets/img/products/mens/knit-mens-casual-05-cargo.png';
import knitMensDenim07 from '../assets/img/products/mens/knit-mens-premium-07-denim.png';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative inline-block mb-6">
              <span className="text-primary font-bold uppercase tracking-widest text-sm relative pl-12 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[2px] after:bg-primary">Welcome to</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-secondary tracking-tight">
              S.B SOURCING
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p className="font-bold text-secondary uppercase text-base tracking-wider border-l-4 border-primary pl-4">
                GARMENTS MANUFACTURER, SUPPLIER & QUALITY CONTROL COMPANY
              </p>
              <p>
                We S.B Sourcing is a leading 100% export-oriented readymade clothing supplier and apparel sourcing agent based in Dhaka, Bangladesh. 
                With over 18 years of practical working experience in the garments sector, we take pride in offering high-quality solutions 
                for sourcing apparel and garment accessories from Bangladesh to our valued customers worldwide.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/company-profile"
                className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4">
               <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                src={aboutProductsFlatlay}
                className="w-full rounded-2xl shadow-2xl" 
                alt="Apparel flatlay products"
               />
               <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                src={knitMensTshirt01}
                className="w-full rounded-2xl shadow-xl" 
                alt="Men's knit t-shirt"
               />
             </div>
             <div className="space-y-4 pt-12">
               <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src={knitMensCargo05}
                className="w-full rounded-2xl shadow-xl" 
                alt="Men's cargo trouser"
               />
               <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                src={knitMensDenim07}
                className="w-full rounded-2xl shadow-2xl" 
                alt="Men's denim pant"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
