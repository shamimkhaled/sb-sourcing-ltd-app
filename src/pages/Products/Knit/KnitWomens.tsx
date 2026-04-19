import ProductGallery from '../../../components/ProductGallery';
import { pexelsPhoto, productShowcaseIds } from '../../../constants/stockImages';

const titles = [
  "Women's Top 01",
  "Women's Knit Dress 02",
  "Women's Cardigan 03",
  "Women's Hoodie 04",
];

const products = titles.map((title, i) => ({
  id: 21 + i,
  title,
  image: pexelsPhoto(productShowcaseIds.knitWomens[i], 800),
}));

export default function KnitWomens() {
  return (
    <ProductGallery
      title="Knit – Women’s"
      category="Knitwear"
      products={products}
    />
  );
}
