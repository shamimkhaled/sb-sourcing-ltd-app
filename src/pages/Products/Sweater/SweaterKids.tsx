import ProductGallery from '../../../components/ProductGallery';
const products = [
  { id: 91, title: 'Kids Sweater 01', image: 'https://picsum.photos/seed/swk1/600/800' },
];
export default function SweaterKids() {
  return <ProductGallery title="Sweater – Kid’s" category="Sweater" products={products} />;
}
