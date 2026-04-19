import ProductGallery from '../../../components/ProductGallery';
const products = [
  { id: 81, title: 'Women\'s Sweater 01', image: 'https://picsum.photos/seed/sww1/600/800' },
];
export default function SweaterWomens() {
  return <ProductGallery title="Sweater – Women’s" category="Sweater" products={products} />;
}
