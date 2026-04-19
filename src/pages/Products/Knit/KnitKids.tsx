import ProductGallery from '../../../components/ProductGallery';
const products = [
  { id: 31, title: 'Kids Knit 01', image: 'https://picsum.photos/seed/ktk1/600/800' },
  { id: 32, title: 'Kids Knit 02', image: 'https://picsum.photos/seed/ktk2/600/800' },
];
export default function KnitKids() {
  return <ProductGallery title="Knit – Kid’s" category="Knitwear" products={products} />;
}
