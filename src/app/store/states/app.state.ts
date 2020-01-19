import { productAdapter } from "./product.state";
import { EntityState } from "@ngrx/entity";
import { Product } from "src/app/modules/main-layout/models/product";

export interface AppProductState {
  products: EntityState<Product>;
}

export const initialAppProductState: AppProductState = {
  products: productAdapter.getInitialState()
};
