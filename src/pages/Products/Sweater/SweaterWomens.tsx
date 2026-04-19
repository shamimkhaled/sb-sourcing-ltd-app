import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const products = [
  {
    id: 81,
    title: "Women's Sweater 01",
    image: pexelsPhoto(productShowcaseIds.sweaterWomens[0], 800),
  },
];

export default function SweaterWomens() {
  return <ProductGallery title="Sweater – Women’s" category="Sweater" products={products} />;
}
