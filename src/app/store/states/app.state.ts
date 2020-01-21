import { Product } from './../../modules/main-layout/models/product';
import { productAdapter } from './product.state';
import { EntityState } from '@ngrx/entity';

export interface AppProductState {
  products: EntityState<Product>;
}

export const initialAppProductState: AppProductState = {
  products: productAdapter.getInitialState()
};

export const getInitialState = (): AppProductState => initialAppProductState;
