import ProductGallery from '../../../components/ProductGallery';

const products = [
  { id: 21, title: 'Women\'s Top 01', image: 'https://picsum.photos/seed/ktw1/600/800' },
  { id: 22, title: 'Women\'s Knit Dress 02', image: 'https://picsum.photos/seed/ktw2/600/800' },
  { id: 23, title: 'Women\'s Cardigan 03', image: 'https://picsum.photos/seed/ktw3/600/800' },
  { id: 24, title: 'Women\'s Hoodie 04', image: 'https://picsum.photos/seed/ktw4/600/800' },
];

export default function KnitWomens() {
  return (
    <ProductGallery 
      title="Knit – Women’s" 
      category="Knitwear" 
      products={products} 
    />
  );
}
