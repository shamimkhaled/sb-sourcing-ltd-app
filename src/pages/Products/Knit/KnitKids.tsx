import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const titles = ['Kids Knit 01', 'Kids Knit 02'];

const products = titles.map((title, i) => ({
  id: 31 + i,
  title,
  image: pexelsPhoto(productShowcaseIds.knitKids[i], 800),
}));

export default function KnitKids() {
  return <ProductGallery title="Knit – Kid’s" category="Knitwear" products={products} />;
}
