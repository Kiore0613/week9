import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppProductState } from '../states/app.state';
import { productReducer } from './product.reducer';

export const reducers: ActionReducerMap<AppProductState, any> = {
  products: productReducer
};

export const metaReducers: MetaReducer<
  AppProductState
>[] = !environment.production ? [] : [];
