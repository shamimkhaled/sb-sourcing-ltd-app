import ProductGallery from '../../components/ProductGallery';
import { productCategoryImages, unsplashDownloadPhoto } from '../../constants/stockImages';
import knitMensTshirt01 from '../../assets/img/products/mens/knit-mens-tshirt-01.png';

const products = [
  { id: 1, title: "Men's Knit T-Shirt", image: knitMensTshirt01 },
  { id: 2, title: "Men's Knit Polo", image: productCategoryImages.knitMens[1] },
  { id: 3, title: "Men's Knit Sweatshirt", image: productCategoryImages.knitMens[2] },
  { id: 4, title: "Women's Knit Top", image: productCategoryImages.knitWomens[0] },
  { id: 5, title: "Women's Knit Dress", image: productCategoryImages.knitWomens[1] },
  { id: 6, title: "Women's Knit Cardigan", image: productCategoryImages.knitWomens[2] },
  { id: 7, title: "Kids Knit T-Shirt", image: productCategoryImages.knitKids[0] },
  { id: 8, title: "Kids Knit Set", image: productCategoryImages.knitKids[1] },
  { id: 9, title: "Kids Knit Hoodie", image: unsplashDownloadPhoto('xXJ6utyoSw0', 900) },
];

export default function Knits() {
  return <ProductGallery title="Knits" category="Knits" products={products} />;
}
