import ProductGallery from '../../../components/ProductGallery';

const products = [
  { id: 1, title: 'Men\'s T-Shirt 01', image: 'https://picsum.photos/seed/ktm1/600/800' },
  { id: 2, title: 'Men\'s Polo Shirt 02', image: 'https://picsum.photos/seed/ktm2/600/800' },
  { id: 3, title: 'Men\'s Sweatshirt 03', image: 'https://picsum.photos/seed/ktm3/600/800' },
  { id: 4, title: 'Men\'s Hoodie 04', image: 'https://picsum.photos/seed/ktm4/600/800' },
  { id: 5, title: 'Men\'s Casual Knit 05', image: 'https://picsum.photos/seed/ktm5/600/800' },
  { id: 6, title: 'Men\'s Active Wear 06', image: 'https://picsum.photos/seed/ktm6/600/800' },
  { id: 7, title: 'Men\'s Premium Knit 07', image: 'https://picsum.photos/seed/ktm7/600/800' },
  { id: 8, title: 'Men\'s T-Shirt 08', image: 'https://picsum.photos/seed/ktm8/600/800' },
];

export default function KnitMens() {
  return (
    <ProductGallery 
      title="Knit – Men’s" 
      category="Knitwear" 
      products={products} 
    />
  );
}
