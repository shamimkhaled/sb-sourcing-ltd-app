import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const products = [
  {
    id: 81,
    title: "Women's Sweater 01",
    image: productCategoryImages.sweaterWomens[0],
  },
];

export default function SweaterWomens() {
  return <ProductGallery title="Sweater – Women’s" category="Sweater" products={products} />;
}
