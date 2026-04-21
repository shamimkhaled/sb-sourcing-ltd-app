import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const complianceLogos = [
  'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/Amfori-rarx08r3aswokqvxmbdmjl8xglqrl3rb0uwrof4x6o.jpg', // BSCI
  'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/sedex-rarx08r3aswokqvxmbdmjl8xglqrl3rb0uwrof4x6o.png', // SEDEX
  'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/accord-rarx08r3aswokqvxmbdmjl8xglqrl3rb0uwrof4x6o.png',
  'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/ics-rarx08r3aswokqvxmbdmjl8xglqrl3rb0uwrof4x6o.jpg',
  'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/recycled_logo-rarx08r3aswokqvxmbdmjl8xglqrl3rb0uwrof4x6o.png',
  'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/organic-rarx07t93yve94xarsyzz3hgv7vedenkoq9a756bcw.jpg'
];

const membershipLogos = [
  'https://www.lamia-fashion.com/wp-content/uploads/elementor/thumbs/bgba-rarx08r3aswokqvxmbdmjl8xglqrl3rb0uwrof4x6o.png'
];

interface LogosSliderProps {
  title: string;
  type: 'compliance' | 'membership';
}

export default function LogosSlider({ title, type }: LogosSliderProps) {
  const logos = type === 'compliance' ? complianceLogos : membershipLogos;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-black text-secondary text-center mb-12 uppercase tracking-widest">{title}</h3>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="items-center"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src={logo} alt="Partner Logo" className="max-h-20 w-auto object-contain mx-auto" referrerPolicy="no-referrer" />
            </SwiperSlide>
          ))}
          {/* Double up for empty slider feel if few logos */}
          {logos.length < 5 && logos.map((logo, index) => (
            <SwiperSlide key={`dup-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src={logo} alt="Partner Logo" className="max-h-20 w-auto object-contain mx-auto" referrerPolicy="no-referrer" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
