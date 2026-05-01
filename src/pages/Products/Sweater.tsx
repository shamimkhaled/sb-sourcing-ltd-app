import ProductGallery from '../../components/ProductGallery';
import { sweaterGalleryProducts } from '../../constants/productGalleryAssets';

export default function Sweater() {
  return <ProductGallery title="Sweater" category="Sweater" products={sweaterGalleryProducts} />;
}
