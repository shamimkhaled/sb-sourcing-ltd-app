import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://picsum.photos/seed/garments1/1920/1080',
    title: 'S.B SOURCING',
    description: '100% export-oriented readymade clothing supplier and apparel sourcing agent based in Dhaka, Bangladesh',
    buttonText: 'About Us',
    link: '/company-profile'
  },
  {
    image: 'https://picsum.photos/seed/garments2/1920/1080',
    title: 'QUALITY & EXCELLENCE',
    description: 'Garments manufacturer, supplier & quality control company with BSCI, Sedex, WRAP certifications.',
    buttonText: 'Our Services',
    link: '/our-service'
  }
];

export default function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[90vh]">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="h-full group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={slide.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl bg-white/90 backdrop-blur-sm p-8 lg:p-12 border-l-[20px] border-primary ml-4">
                  <motion.h3 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary font-bold text-xl lg:text-2xl uppercase tracking-[0.2em] mb-4"
                  >
                    {slide.title}
                  </motion.h3>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-secondary text-3xl lg:text-5xl font-black mb-8 leading-tight"
                  >
                    {slide.description}
                  </motion.h1>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      to={slide.link}
                      className="inline-block bg-primary hover:bg-secondary text-white px-10 py-4 rounded-sm font-bold uppercase transition-all shadow-xl"
                    >
                      {slide.buttonText}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: white;
          background: rgba(194, 11, 11, 0.8);
          width: 50px;
          height: 100px;
          margin-top: -50px;
          opacity: 0;
          transition: all 0.3s;
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-button-next { border-radius: 5px 0 0 5px; right: 0; }
        .swiper-button-prev { border-radius: 0 5px 5px 0; left: 0; }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 20px; font-weight: bold; }
      `}</style>
    </section>
  );
}
