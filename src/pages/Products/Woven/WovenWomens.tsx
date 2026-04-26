import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const titles = ["Women's Dress 01", "Women's Skirt 02"];

const products = titles.map((title, i) => ({
  id: 51 + i,
  title,
  image: productCategoryImages.wovenWomens[i],
}));

export default function WovenWomens() {
  return <ProductGallery title="Woven – Women’s" category="Woven Wear" products={products} />;
}
