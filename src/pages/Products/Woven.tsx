import ProductGallery from '../../components/ProductGallery';
import { wovenGalleryProducts } from '../../constants/productGalleryAssets';

export default function Woven() {
  return <ProductGallery title="Woven" category="Woven" products={wovenGalleryProducts} />;
}
