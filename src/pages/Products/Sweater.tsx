import ProductGallery from '../../components/ProductGallery';
import { productCategoryImages, unsplashDownloadPhoto } from '../../constants/stockImages';

const products = [
  { id: 71, title: "Men's Sweater", image: productCategoryImages.sweaterMens[0] },
  { id: 72, title: "Men's Pullover", image: unsplashDownloadPhoto('HKAZ-k4h2NE', 900) },
  { id: 81, title: "Women's Sweater", image: productCategoryImages.sweaterWomens[0] },
  { id: 82, title: "Women's Cardigan Sweater", image: unsplashDownloadPhoto('AqcgORY1aiM', 900) },
  { id: 91, title: 'Kids Sweater', image: productCategoryImages.sweaterKids[0] },
  { id: 92, title: 'Kids Winter Knitwear', image: unsplashDownloadPhoto('TYXCnTHDqHk', 900) },
];

export default function Sweater() {
  return <ProductGallery title="Sweater" category="Sweater" products={products} />;
}
