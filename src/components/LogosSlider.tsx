import { motion } from 'motion/react';
import bsciLogo from '../assets/img/compilance-logo/bsci-logo-removebg-preview.png';
import sedexLogo from '../assets/img/compilance-logo/sedex-logo-removebg-preview.png';
import wrapLogo from '../assets/img/compilance-logo/wrap-logo-removebg-preview.png';
import rscLogo from '../assets/img/compilance-logo/rsc-logo.png';
import isoLogo from '../assets/img/compilance-logo/ISO-logo-removebg-preview.png';
import oekoTexLogo from '../assets/img/compilance-logo/oekotex-logo-removebg-preview.png';

const complianceLogos = [
  { name: 'BSCI Certification', src: bsciLogo },
  { name: 'SEDEX Certification', src: sedexLogo },
  { name: 'WRAP Certification', src: wrapLogo },
  { name: 'RCS Certification', src: rscLogo },
  { name: 'ISO Certification', src: isoLogo },
  { name: 'OEKO-TEX Certification', src: oekoTexLogo },
] as const;

const membershipLogos = [
  {
    name: 'BGBA Membership',
    src: 'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/bgba-rarx08r3aswokqvxmbdmjl8xglqrl3rb0uwrof4x6o.png',
  },
] as const;

interface LogosSliderProps {
  title: string;
  type: 'compliance' | 'membership';
}

function LogoCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="group flex h-28 w-[170px] sm:w-[190px] lg:w-[210px] shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={src}
        alt={name}
        className="h-14 w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function LogosSlider({ title, type }: LogosSliderProps) {
  const logos = type === 'compliance' ? complianceLogos : membershipLogos;

  return (
    <section className="py-20 bg-[#fcf8f5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-black text-secondary uppercase tracking-widest">{title}</h3>
          {type === 'compliance' && (
            <p className="text-sm text-gray-500 mt-3 font-medium tracking-wide">
              Certified standards followed across sourcing, quality, and production.
            </p>
          )}
        </motion.div>

        {type === 'compliance' ? (
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex w-max gap-5 animate-[compliance-marquee_28s_linear_infinite] hover:[animation-play-state:paused]"
              aria-label="Compliance and certification logos"
            >
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: (index % logos.length) * 0.06 }}
                >
                  <LogoCard src={logo.src} name={logo.name} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="flex justify-center">
            {logos.map((logo) => (
              <LogoCard key={logo.name} src={logo.src} name={logo.name} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes compliance-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
