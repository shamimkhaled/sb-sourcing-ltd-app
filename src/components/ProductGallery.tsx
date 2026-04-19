import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';
import { banners } from '../constants/stockImages';

interface Product {
  id: number;
  title: string;
  image: string;
}

interface ProductGalleryProps {
  title: string;
  category: string;
  products: Product[];
}

export default function ProductGallery({ title, category, products }: ProductGalleryProps) {
  return (
    <div className="pt-[100px] lg:pt-[128px]">
      {/* Page Title Banner */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${banners.fabricRack}')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">{title}</h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
             <a href="/" className="hover:text-primary transition-colors">Home</a>
             <span>/</span>
             <span className="text-white">Products</span>
             <span>/</span>
             <span className="text-white">{category}</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl hover:bg-primary hover:text-white transition-all transform hover:rotate-90">
                      <ZoomIn size={24} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-secondary uppercase tracking-widest text-sm">{product.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
               <h3 className="text-xl font-bold text-gray-400">Loading products...</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
