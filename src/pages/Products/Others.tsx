import ProductGallery from '../../components/ProductGallery';
import { othersGalleryProducts } from '../../constants/productGalleryAssets';

export default function Others() {
  return (
    <ProductGallery title="Others" category="Others" products={othersGalleryProducts} />
  );
}
