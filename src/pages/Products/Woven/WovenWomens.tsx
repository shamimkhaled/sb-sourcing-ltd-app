import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const titles = ["Women's Dress 01", "Women's Skirt 02"];

const products = titles.map((title, i) => ({
  id: 51 + i,
  title,
  image: pexelsPhoto(productShowcaseIds.wovenWomens[i], 800),
}));

export default function WovenWomens() {
  return <ProductGallery title="Woven – Women’s" category="Woven Wear" products={products} />;
}
