import { EProductActions, ProductActions } from './../actions/product.actions';
import {
  ProductState,
  initialProductStateProperties,
  productAdapter
} from './../states/product.state';

export function productReducer(
  state: ProductState = initialProductStateProperties,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return productAdapter.upsertMany(action.payload, state);
    }
    case EProductActions.GetProductsByCategorySuccess: {
      return { ...state, products: action.payload, error: null };
    }
    case EProductActions.GetProductsByNameSuccess: {
      return { ...state, products: action.payload, error: null };
    }
    default:
      return state;
  }
}
