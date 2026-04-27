import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonialPortraits } from '../constants/stockImages';

const feedback = [
  {
    name: 'G. Basta',
    role: 'CEO,  Apparels Business, Poland',
    feedback: 'Excellent service and product quality. S.B Sourcing has been our reliable partner for over 10 years. Their attention to detail in quality control is unmatched.',
    image: testimonialPortraits.a
  },
  {
    name: 'Wendy',
    role: 'Owner, Apparels Business, Netherlands',
    feedback: 'The sampling process is very efficient. They understand our design requirements perfectly and delivery high-quality samples within the promised timeline.',
    image: testimonialPortraits.b
  },
  {
    name: 'Audrey',
    role: 'Product Manager, Apparels, France',
    feedback: 'We highly recommend S.B Sourcing for their professional approach and deep knowledge of the garment industry in Bangladesh. They make sourcing trouble-free.',
    image: testimonialPortraits.c
  },

  {
    name: 'MOO',
    role: 'Owner Manager, Thailand',
    feedback: 'We highly recommend S.B Sourcing for their professional approach and deep knowledge of the garment industry in Bangladesh. They make sourcing trouble-free.',
    image: testimonialPortraits.a
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fcf8f5]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6 text-secondary">
             What People Say
          </h2>
          <p className="text-gray-600">
             We value the relationships we build. Here is what our global partners have to say about our professional services.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {feedback.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-10 rounded-2xl shadow-xl relative mt-10">
                <div className="absolute -top-10 left-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl">
                   <Quote size={40} fill="currentColor" />
                </div>
                
                <div className="flex gap-1 mb-6 text-yellow-500">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
                  "{item.feedback}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img src={item.image} className="w-16 h-16 rounded-full object-cover border-4 border-gray-100" alt={item.name} referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-secondary text-lg">{item.name}</h4>
                    <p className="text-primary font-semibold text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
