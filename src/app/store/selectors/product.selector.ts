import { ProductState } from "./../states/product.state";
import { AppProductState } from "./../states/app.state";
import { createSelector } from "@ngrx/store";

export const getProductState = (state: AppProductState) => state.products;

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products
);
