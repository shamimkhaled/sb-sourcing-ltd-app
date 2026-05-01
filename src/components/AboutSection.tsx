import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import welcomeGarmentsRack from '../assets/img/welcome/welcome-garments-rack.png';
import welcomeQualityInspection from '../assets/img/welcome/welcome-quality-inspection.png';
import welcomeProductsFlatlay from '../assets/img/welcome/welcome-products-flatlay.png';
import welcomeProductionSewing from '../assets/img/welcome/welcome-production-sewing.png';

const welcomeImages = [
  {
    src: welcomeProductsFlatlay,
    alt: 'Knit, woven, and lifestyle apparel flatlay',
    delay: 0,
  },
  {
    src: welcomeGarmentsRack,
    alt: 'Garment rack showcasing pleated and ribbed apparel',
    delay: 0.08,
  },
  {
    src: welcomeQualityInspection,
    alt: 'Quality control professional reviewing garments in a showroom',
    delay: 0.16,
  },
  {
    src: welcomeProductionSewing,
    alt: 'Garment production — sewing machine and operator in the factory',
    delay: 0.24,
  },
] as const;

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative inline-block mb-6">
              <span className="text-primary font-bold uppercase tracking-widest text-sm relative pl-12 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[2px] after:bg-primary">
                Welcome to
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-secondary tracking-tight">S.B SOURCING</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p className="font-bold text-secondary uppercase text-base tracking-wider border-l-4 border-primary pl-4">
                GARMENTS MANUFACTURER, SUPPLIER & QUALITY CONTROL COMPANY
              </p>
              <p>
                We S.B Sourcing is a leading 100% export-oriented readymade clothing supplier and apparel
                sourcing agent based in Dhaka, Bangladesh. With over 18 years of practical working experience in
                the garments sector, we take pride in offering high-quality solutions for sourcing apparel and
                garment accessories from Bangladesh to our valued customers worldwide.
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

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {welcomeImages.map((item) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: item.delay }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
