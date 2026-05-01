import ProductGallery from '../../components/ProductGallery';
import { knitGalleryProducts } from '../../constants/productGalleryAssets';

export default function Knits() {
  return <ProductGallery title="Knits" category="Knits" products={knitGalleryProducts} />;
}
