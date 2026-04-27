import ProductGallery from '../../components/ProductGallery';
import { productCategoryImages, unsplashDownloadPhoto } from '../../constants/stockImages';

const products = [
  { id: 101, title: "Men's Work Uniform", image: productCategoryImages.wovenMens[1] },
  { id: 102, title: "Women's Corporate Uniform", image: productCategoryImages.wovenWomens[0] },
  { id: 103, title: 'Boys School Uniform', image: productCategoryImages.knitKids[0] },
  { id: 104, title: 'Girls School Uniform', image: productCategoryImages.knitKids[1] },
  { id: 105, title: "Men's Security Uniform", image: unsplashDownloadPhoto('H0-Cn6I2FSg', 900) },
  { id: 106, title: "Women's Service Uniform", image: unsplashDownloadPhoto('ssE2sYVt-xs', 900) },
];

export default function Uniforms() {
  return <ProductGallery title="Uniforms" category="Uniforms" products={products} />;
}
