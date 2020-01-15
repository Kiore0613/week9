import { ProductState, initialProductState } from "./product.state";

export interface AppProductState {
  products: ProductState;
}

export const initialAppProductState: AppProductState = {
  products: initialProductState
};
export const getInitialAppProductState = (): AppProductState =>
  initialAppProductState;
