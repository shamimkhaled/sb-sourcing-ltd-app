import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { banners, pexelsPhoto } from '../../constants/stockImages';

export default function CompanyProfile() {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${banners.workshop}')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Company Profile</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">About Us</span>
             <span>/</span>
             <span className="text-white">Company Profile</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-3/5">
               <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">About S.B Sourcing</span>
               <h2 className="text-4xl font-black text-secondary mb-8">Who We Are</h2>
               <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    <strong className="text-secondary">S.B SOURCING</strong> is a garments Buying house, Exporter & manufacturer in Bangladesh. 
                    This is our family business. We have compliance garments manufacturer factory with having BSCI, Sedex, WRAP, and RSC certifications.
                  </p>
                  <p>
                    Our founder, <strong className="text-secondary italic">Shopon (Salah Uddin)</strong>, has a rich legacy of 18 years in the merchandising sector, 
                    having worked with global giants like <strong className="text-secondary italic">Li & Fung, SEARS, Celio, and C&A (Mondial)</strong>. 
                    His last position was Country Manager at Celton HK Ltd. before starting his own venture in 2014.
                  </p>
                  <p>
                    Since our inception, we have built a good reputation by exporting high-quality garments to prestigious customers 
                    such as <strong className="text-secondary italic">Le Cocotier S.A-France, Sortmund-Poland, and Brand2Love-Netherlands</strong>.
                  </p>
                  <p>
                    We specialize in Men's and Ladies woven bottoms (Trousers, Shorts), Jackets, and Shirts, denim, non-denim, workwear, sportswear, and uniforms.
                    In the Knit segment, we offer T-shirts, Polo shirts, Sweatshirts, and Hoodies, cloth and jute bags, caps, and shoes.
                  </p>
               </div>

               <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    '18 years of merchandising expertise',
                    'BSCI, Sedex, WRAP Certified Factories',
                    'Woven & Knit Production units',
                    'Quality Control Experts',
                    'Timely Delivery Commitment',
                    'Competitive Pricing'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#fcf8f5] p-4 rounded-sm border-l-4 border-primary">
                       <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                       <span className="font-bold text-secondary text-sm">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="w-full lg:w-2/5 space-y-8">
               <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={pexelsPhoto(5632402, 1200)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt="Production"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-6 border-l-4 border-primary shadow-xl">
                     <div className="text-4xl font-black text-primary">18+</div>
                     <div className="text-xs font-bold uppercase tracking-widest text-secondary">Years of Experience</div>
                  </div>
               </div>

               {/* Organization Details Table */}
               <div className="bg-secondary p-8 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Organization Details</h3>
                  <div className="space-y-4 text-sm font-medium">
                     <div className="flex justify-between">
                        <span className="text-white/60">Company Name</span>
                        <span className="font-bold text-right">S.B SOURCING</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-white/60">Established</span>
                        <span>2014</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-white/60">Owner/CEO</span>
                        <span>Salah Uddin (Shopon)</span>
                     </div>
                     <div className="flex justify-between items-start gap-4">
                        <span className="text-white/60 flex-shrink-0">Nature of Business</span>
                        <span className="text-right">Garments Buying House, Exporter & Manufacturer</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
