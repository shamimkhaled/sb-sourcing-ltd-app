import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const close = useCallback(() => setPreviewIndex(null), []);

  const openAt = useCallback((index: number) => {
    setPreviewIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setPreviewIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setPreviewIndex((i) =>
      i !== null && i < products.length - 1 ? i + 1 : i
    );
  }, [products.length]);

  useEffect(() => {
    if (previewIndex === null) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [previewIndex]);

  useEffect(() => {
    if (previewIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewIndex, close, goPrev, goNext]);

  const previewProduct =
    previewIndex !== null ? products[previewIndex] ?? null : null;

  const lightbox =
    previewProduct !== null && previewIndex !== null ? (
      <motion.div
        key="product-preview"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-preview-title"
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/80 transition-opacity"
          onClick={close}
          aria-label="Close preview"
        />

        <div
          className="relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 bg-gray-50 px-4 py-3 sm:px-5 sm:py-4">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">{category}</p>
              <h2
                id="product-preview-title"
                className="truncate text-sm font-black uppercase tracking-tight text-secondary sm:text-lg"
              >
                {previewProduct.title}
              </h2>
              <p className="mt-0.5 text-[11px] text-gray-500 sm:text-xs">
                {previewIndex + 1} / {products.length}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary transition-colors hover:border-primary hover:text-primary"
              aria-label="Close"
            >
              <X size={20} strokeWidth={2.25} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center bg-neutral-100 p-3 sm:p-6">
            {products.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={previewIndex <= 0}
                  className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary shadow-sm transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-30 sm:left-4"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={previewIndex >= products.length - 1}
                  className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary shadow-sm transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-30 sm:right-4"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <img
              src={previewProduct.image}
              alt={previewProduct.title}
              referrerPolicy="no-referrer"
              className="max-h-[min(72vh,720px)] w-full object-contain select-none"
            />
          </div>
        </div>
      </motion.div>
    ) : null;

  return (
    <div className="pt-[100px] lg:pt-[128px]">
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${banners.fabricRack}')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            {title}
          </h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
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
            {products.map((product, index) => (
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
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-primary/20 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 flex translate-y-0 items-center justify-center opacity-100 transition-all duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => openAt(index)}
                      className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-2xl transition-all hover:rotate-90 hover:bg-primary hover:text-white"
                      aria-label={`Preview ${product.title}`}
                    >
                      <Search size={22} strokeWidth={2.25} aria-hidden />
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

      {typeof document !== 'undefined' &&
        createPortal(<AnimatePresence mode="wait">{lightbox}</AnimatePresence>, document.body)}
    </div>
  );

}
