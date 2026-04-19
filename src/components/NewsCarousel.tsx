import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { banners } from '../constants/stockImages';

const news = [
  {
    title: 'Sustainability in Garment Manufacturing',
    excerpt: 'How we are adapting sustainable practices in our production line to protect the environment...',
    date: 'Oct 20, 2025',
    author: 'Admin',
    image: banners.fashionStudio
  },
  {
    title: 'New Trends in Knitwear for 2026',
    excerpt: 'Exploring the latest designs and fabrics that will dominate the knitwear market next season...',
    date: 'Nov 06, 2025',
    author: 'Designer',
    image: banners.logisticsApparel
  },
  {
    title: 'S.B Sourcing Wins Quality Award',
    excerpt: 'We are proud to announce that our quality control team has been recognized for excellence...',
    date: 'Dec 15, 2025',
    author: 'Owner',
    image: banners.textileFlatlay
  }
];

export default function NewsCarousel() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-xl">
             <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Latest Updates</span>
             <h2 className="text-4xl lg:text-5xl font-black mt-4 text-secondary">
               Our Recent News
             </h2>
           </div>
           <Link to="#" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-primary transition-all">
             View All Blogs <ArrowRight size={16} />
           </Link>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 6000 }}
          className="pb-8"
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group overflow-hidden rounded-2xl bg-[#fcf8f5] shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title}  referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                     Garments
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {item.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {item.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <Link to="#" className="text-secondary font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                    Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
