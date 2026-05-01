import ProductGallery from '../../../components/ProductGallery';
import basicTshirt from '../../../assets/img/products/knit/knit men/Basic T-Shirt.png';
import hoodie from '../../../assets/img/products/knit/knit men/Hoodie.png';
import joggers from '../../../assets/img/products/knit/knit men/Joggers.png';
import knitActive from '../../../assets/img/products/knit/knit men/knit-mens-active-06-non-denim.png';
import knitCargo from '../../../assets/img/products/knit/knit men/knit-mens-casual-05-cargo.png';
import knitDenim from '../../../assets/img/products/knit/knit men/knit-mens-premium-07-denim.png';
import mensTshirt from '../../../assets/img/products/knit/knit men/mens-tshirt.png';
import polo from '../../../assets/img/products/knit/knit men/Polo Shirt.png';
import sweatshirt from '../../../assets/img/products/knit/knit men/Sweatshirt.png';
import tankTop from '../../../assets/img/products/knit/knit men/Tank Top.png';

const products = [
  { id: 1, title: "Men's Basic T-Shirt", image: basicTshirt },
  { id: 2, title: "Men's Polo Shirt", image: polo },
  { id: 3, title: "Men's Sweatshirt", image: sweatshirt },
  { id: 4, title: "Men's Hoodie", image: hoodie },
  { id: 5, title: "Men's Tank Top", image: tankTop },
  { id: 6, title: "Men's Joggers", image: joggers },
  { id: 7, title: "Men's T-Shirt", image: mensTshirt },
  { id: 8, title: "Men's Cargo Pant", image: knitCargo },
  { id: 9, title: "Men's Non Denim Pant", image: knitActive },
  { id: 10, title: "Men's Denim Pant", image: knitDenim },
];

export default function KnitMens() {
  return (
    <ProductGallery
      title="Knit – Men’s"
      category="Knitwear"
      products={products}
    />
  );
}
