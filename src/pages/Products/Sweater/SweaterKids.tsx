import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const products = [
  {
    id: 91,
    title: 'Kids Sweater 01',
    image: pexelsPhoto(productShowcaseIds.sweaterKids[0], 800),
  },
];

export default function SweaterKids() {
  return <ProductGallery title="Sweater – Kid’s" category="Sweater" products={products} />;
}
