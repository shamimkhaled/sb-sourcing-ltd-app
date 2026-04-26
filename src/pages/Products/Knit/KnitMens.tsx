import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';

const titles = [
  "Men's T-Shirt 01",
  "Men's Polo Shirt 02",
  "Men's Sweatshirt 03",
  "Men's Hoodie 04",
  "Men's Casual Knit 05",
  "Men's Active Wear 06",
  "Men's Premium Knit 07",
  "Men's T-Shirt 08",
];

const products = titles.map((title, i) => ({
  id: i + 1,
  title,
  image: productCategoryImages.knitMens[i],
}));

export default function KnitMens() {
  return (
    <ProductGallery
      title="Knit – Men’s"
      category="Knitwear"
      products={products}
    />
  );
}
