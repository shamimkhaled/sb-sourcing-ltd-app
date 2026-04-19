import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const products = [
  {
    id: 61,
    title: 'Kids Woven 01',
    image: pexelsPhoto(productShowcaseIds.wovenKids[0], 800),
  },
];

export default function WovenKids() {
  return <ProductGallery title="Woven – Kid’s" category="Woven Wear" products={products} />;
}
