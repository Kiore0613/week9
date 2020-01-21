import { Product } from './product';

export interface ShoppingCartList {
  id: string;
  item: Product;
  quantity: number;
}
