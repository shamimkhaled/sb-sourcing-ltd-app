import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const products = [
  {
    id: 71,
    title: "Men's Sweater 01",
    image: pexelsPhoto(productShowcaseIds.sweaterMens[0], 800),
  },
];

export default function SweaterMens() {
  return <ProductGallery title="Sweater – Men’s" category="Sweater" products={products} />;
}
