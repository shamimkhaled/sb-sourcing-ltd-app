import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const products = [
  {
    id: 71,
    title: "Men's Sweater 01",
    image: productCategoryImages.sweaterMens[0],
  },
];

export default function SweaterMens() {
  return <ProductGallery title="Sweater – Men’s" category="Sweater" products={products} />;
}
