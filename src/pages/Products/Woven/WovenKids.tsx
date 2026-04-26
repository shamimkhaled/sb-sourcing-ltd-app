import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const products = [
  {
    id: 61,
    title: 'Kids Woven 01',
    image: productCategoryImages.wovenKids[0],
  },
];

export default function WovenKids() {
  return <ProductGallery title="Woven – Kid’s" category="Woven Wear" products={products} />;
}
