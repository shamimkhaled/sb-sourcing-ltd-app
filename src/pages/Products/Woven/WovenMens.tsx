import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const titles = ["Men's Trouser 01", "Men's Shirt 02"];

const products = titles.map((title, i) => ({
  id: 41 + i,
  title,
  image: pexelsPhoto(productShowcaseIds.wovenMens[i], 800),
}));

export default function WovenMens() {
  return <ProductGallery title="Woven – Men’s" category="Woven Wear" products={products} />;
}
