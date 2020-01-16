import { EProductActions, ProductActions } from './../actions/product.actions';
import { ProductState, initialProductState } from './../states/product.state';

export const productReducer = (
  state: ProductState = initialProductState,
  action: ProductActions
): ProductState => {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return { ...state, products: action.payload, error: null };
    }
    default:
      return state;
  }
};
