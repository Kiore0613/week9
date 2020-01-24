import { Category } from "./../modules/main-layout/models/category";
import { Product } from "./../modules/main-layout/models/product";
export const product: Product = {
  id: "29",
  slug: "barnetts-mega-sour",
  name: "barnett's mega sour",
  description: "Sour Candy",
  active: "1",
  likes_count: "2",
  likes_up_count: "2",
  likes_down_count: "0",
  published_at: "2019-04-03T05:10:40.726Z",
  master: {
    id: "29",
    sku: "159753",
    price: "10.98",
    promotional_price: "0.0",
    stock: "55",
    weight: null,
    height: null,
    width: null,
    depth: null,
    is_master: "1",
    position: "0"
  },
  category: {
    id: 3,
    slug: "outdoors-health",
    name: "outdoors & health"
  },
  image: {
    id: 28,
    url: "image"
  }
};

export const categories: Category[] = [
  {
    id: 3,
    slug: "outdoors-health",
    name: "outdoors & health"
  },
  {
    id: 26,
    slug: "baby-music",
    name: "Baby & Music"
  }
];
