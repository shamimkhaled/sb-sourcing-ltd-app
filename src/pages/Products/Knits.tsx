import ProductGallery from '../../components/ProductGallery';
import { productCategoryImages, unsplashDownloadPhoto } from '../../constants/stockImages';
import knitMensTshirt01 from '../../assets/img/products/mens/knit-mens-tshirt-01.png';
import knitMensCasual05Cargo from '../../assets/img/products/mens/knit-mens-casual-05-cargo.png';
import knitMensPremium07Denim from '../../assets/img/products/mens/knit-mens-premium-07-denim.png';
import knitMensActive06NonDenim from '../../assets/img/products/mens/knit-mens-active-06-non-denim.png';
import mensTshirt from '../../assets/img/products/mens/mens-tshirt.png';

const products = [
  { id: 1, title: "Men's Knit T-Shirt", image: knitMensTshirt01 },
  { id: 2, title: "Men's Knit Polo", image: mensTshirt },
  { id: 3, title: "Men's Knit Sweatshirt", image: productCategoryImages.knitMens[2] },
  { id: 4, title: "Men's Knit Hoodie", image: knitMensCasual05Cargo },
  { id: 5, title: "Men's Knit Casualwear", image: knitMensActive06NonDenim },
  { id: 6, title: "Men's Knit Denimwear", image: knitMensPremium07Denim },
  { id: 7, title: "Women's Knit Top", image: productCategoryImages.knitWomens[0] },
  { id: 8, title: "Women's Knit Dress", image: productCategoryImages.knitWomens[1] },
  { id: 9, title: "Women's Knit Cardigan", image: productCategoryImages.knitWomens[2] },
  { id: 10, title: "Women's Knit Hoodie", image: productCategoryImages.knitWomens[3] },
  { id: 11, title: "Kids Knit T-Shirt", image: productCategoryImages.knitKids[0] },
  { id: 12, title: "Kids Knit Set", image: productCategoryImages.knitKids[1] },
  { id: 13, title: "Kids Knit Hoodie", image: unsplashDownloadPhoto('xXJ6utyoSw0', 900) },
];

export default function Knits() {
  return <ProductGallery title="Knits" category="Knits" products={products} />;
}
