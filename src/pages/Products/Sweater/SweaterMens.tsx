import ProductGallery from '../../../components/ProductGallery';
const products = [
  { id: 71, title: 'Men\'s Sweater 01', image: 'https://picsum.photos/seed/swm1/600/800' },
];
export default function SweaterMens() {
  return <ProductGallery title="Sweater – Men’s" category="Sweater" products={products} />;
}
