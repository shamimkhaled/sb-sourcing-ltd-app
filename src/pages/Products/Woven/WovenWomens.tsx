import ProductGallery from '../../../components/ProductGallery';
const products = [
  { id: 51, title: 'Women\'s Dress 01', image: 'https://picsum.photos/seed/wvw1/600/800' },
  { id: 52, title: 'Women\'s Skirt 02', image: 'https://picsum.photos/seed/wvw2/600/800' },
];
export default function WovenWomens() {
  return <ProductGallery title="Woven – Women’s" category="Woven Wear" products={products} />;
}
