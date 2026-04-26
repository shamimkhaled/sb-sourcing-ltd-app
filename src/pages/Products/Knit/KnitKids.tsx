import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const titles = ['Kids Knit 01', 'Kids Knit 02'];

const products = titles.map((title, i) => ({
  id: 31 + i,
  title,
  image: productCategoryImages.knitKids[i],
}));

export default function KnitKids() {
  return <ProductGallery title="Knit – Kid’s" category="Knitwear" products={products} />;
}
