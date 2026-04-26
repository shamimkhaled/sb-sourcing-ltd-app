import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const products = [
  {
    id: 91,
    title: 'Kids Sweater 01',
    image: productCategoryImages.sweaterKids[0],
  },
];

export default function SweaterKids() {
  return <ProductGallery title="Sweater – Kid’s" category="Sweater" products={products} />;
}
