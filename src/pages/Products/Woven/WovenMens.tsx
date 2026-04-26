import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const titles = ["Men's Trouser 01", "Men's Shirt 02"];

const products = titles.map((title, i) => ({
  id: 41 + i,
  title,
  image: productCategoryImages.wovenMens[i],
}));

export default function WovenMens() {
  return <ProductGallery title="Woven – Men’s" category="Woven Wear" products={products} />;
}
