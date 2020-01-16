import { Product } from "src/app/modules/main-layout/models/product";

export interface ProductState {
  products: Product[];
  error: any;
}

export const initialProductState: ProductState = {
  products: [],
  error: null
};
