import { Image } from './image';
import { Master } from './master';
import { Category } from './category';

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  active: string;
  likes_count: string;
  likes_up_count: string;
  likes_down_count: string;
  published_at: string;
  master: Master;
  category: Category;
  image: Image;
}
