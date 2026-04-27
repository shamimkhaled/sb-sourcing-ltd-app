import ProductGallery from '../../../components/ProductGallery';
import { productCategoryImages } from '../../../constants/stockImages';
import knitMensTshirt01 from '../../../assets/img/products/mens/knit-mens-tshirt-01.png';
import knitMensCasual05Cargo from '../../../assets/img/products/mens/knit-mens-casual-05-cargo.png';
import knitMensActive06NonDenim from '../../../assets/img/products/mens/knit-mens-active-06-non-denim.png';
import knitMensPremium07Denim from '../../../assets/img/products/mens/knit-mens-premium-07-denim.png';

const titles = [
  "Men's T-Shirt",
  "Men's Polo Shirt",
  "Men's Sweatshirt",
  "Men's Hoodie",
  "Men's Cargo Trouser",
  "Men's Non Denim Pant",
  "Men's Denim Pant",
];

const products = titles.map((title, i) => ({
  id: i + 1,
  title,
  image:
    i === 0
      ? knitMensTshirt01
      : i === 4
        ? knitMensCasual05Cargo
        : i === 5
          ? knitMensActive06NonDenim
          : i === 6
            ? knitMensPremium07Denim
        : productCategoryImages.knitMens[i],
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
