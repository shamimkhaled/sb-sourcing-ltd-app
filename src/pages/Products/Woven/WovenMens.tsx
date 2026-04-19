import ProductGallery from '../../../components/ProductGallery';
const products = [
  { id: 41, title: 'Men\'s Trouser 01', image: 'https://picsum.photos/seed/wvm1/600/800' },
  { id: 42, title: 'Men\'s Shirt 02', image: 'https://picsum.photos/seed/wvm2/600/800' },
];
export default function WovenMens() {
  return <ProductGallery title="Woven – Men’s" category="Woven Wear" products={products} />;
}
