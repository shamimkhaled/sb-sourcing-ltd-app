import ProductGallery from '../../components/ProductGallery';
import { productCategoryImages, unsplashDownloadPhoto } from '../../constants/stockImages';

const products = [
  { id: 41, title: "Men's Woven Trouser", image: productCategoryImages.wovenMens[0] },
  { id: 42, title: "Men's Woven Shirt", image: productCategoryImages.wovenMens[1] },
  { id: 51, title: "Women's Woven Dress", image: productCategoryImages.wovenWomens[0] },
  { id: 52, title: "Women's Woven Skirt", image: productCategoryImages.wovenWomens[1] },
  { id: 61, title: 'Boys Woven Shirt', image: productCategoryImages.wovenKids[0] },
  { id: 62, title: 'Girls Woven Dress', image: unsplashDownloadPhoto('A3MleA0jtoE', 900) },
];

export default function Woven() {
  return <ProductGallery title="Woven" category="Woven" products={products} />;
}
