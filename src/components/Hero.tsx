import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { banners } from '../constants/stockImages';

const slides = [
  {
    image: banners.apparelRetail,
    title: 'S.B SOURCING',
    description: '100% export-oriented readymade clothing supplier and apparel sourcing agent based in Dhaka, Bangladesh',
    buttonText: 'About Us',
    link: '/company-profile'
  },
  {
    image: banners.sewingFloor,
    title: 'QUALITY & EXCELLENCE',
    description: 'Garments manufacturer, supplier & quality control company with BSCI, Sedex, WRAP certifications.',
    buttonText: 'Our Services',
    link: '/our-service'
  }
];

export default function Hero() {
  return (
    <section className="relative h-[620px] lg:h-[88vh] min-h-[560px]">
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
            <div className="relative h-full overflow-hidden">
              <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={slide.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
                <div className="max-w-3xl">
                  <span className="inline-block mb-4 text-white/80 text-xs font-bold uppercase tracking-[0.3em]">
                    Apparel Sourcing Partner
                  </span>
                  <motion.h3 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary font-bold text-lg lg:text-2xl uppercase tracking-[0.2em] mb-4"
                  >
                    {slide.title}
                  </motion.h3>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-3xl sm:text-4xl lg:text-6xl font-black mb-8 leading-[1.15]"
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
                      className="inline-flex items-center justify-center bg-primary hover:bg-red-700 text-white px-8 lg:px-11 py-4 rounded-md font-bold uppercase tracking-wide text-sm transition-all shadow-xl hover:shadow-primary/30"
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
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(3px);
          width: 46px;
          height: 46px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          margin-top: -23px;
          opacity: 0.85;
          transition: all 0.25s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: rgba(194, 11, 11, 0.9);
          border-color: rgba(255, 255, 255, 0.45);
        }
        .swiper-button-next { right: 20px; }
        .swiper-button-prev { left: 20px; }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 14px; font-weight: 900; }
        @media (max-width: 1023px) {
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
