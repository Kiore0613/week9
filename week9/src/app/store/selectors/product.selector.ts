import { ProductState } from "./../states/product.state";
import { AppProductState } from "./../states/app.state";
import { createSelector } from "@ngrx/store";

export const getProductSate = (state: AppProductState) => state.products;

export const getProducts = createSelector(
  getProductSate,
  (state: ProductState) => state.products
);
