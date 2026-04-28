import ProductGallery from '../../components/ProductGallery';
import { productCategoryImages } from '../../constants/stockImages';
import aboutProductsFlatlay from '../../assets/img/about-products-flatlay.png';

const products = [
  { id: 71, title: "Men's Sweater", image: aboutProductsFlatlay },
  { id: 72, title: "Men's Pullover", image: productCategoryImages.knitMens[2] },
  { id: 81, title: "Women's Sweater", image: productCategoryImages.knitWomens[2] },
  { id: 82, title: "Women's Cardigan Sweater", image: productCategoryImages.sweaterWomens[0] },
  { id: 91, title: 'Kids Sweater', image: productCategoryImages.sweaterKids[0] },
  { id: 92, title: 'Kids Winter Knitwear', image: productCategoryImages.knitKids[1] },
];

export default function Sweater() {
  return <ProductGallery title="Sweater" category="Sweater" products={products} />;
}
