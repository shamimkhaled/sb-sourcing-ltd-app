import ProductGallery from '../../../components/ProductGallery';
const products = [
  { id: 61, title: 'Kids Woven 01', image: 'https://picsum.photos/seed/wvk1/600/800' },
];
export default function WovenKids() {
  return <ProductGallery title="Woven – Kid’s" category="Woven Wear" products={products} />;
}
