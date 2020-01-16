import { Product } from 'src/app/modules/main-layout/models/product';
import { Action } from '@ngrx/store';

export enum EProductActions {
  GetProducts = '[Product] Get Products',
  GetProductsFailure = '[Product] Get ProductsFailure',
  GetProductsSuccess = '[Product] Get ProductsSuccess'
}

export class GetProductsAction implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccessAction implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  constructor(public payload: Product[]) {}
}

export class GetProductsFailureAction implements Action {
  public readonly type = EProductActions.GetProductsFailure;
  public payload: any;
  constructor(error: any) {
    this.payload = { error };
  }
}

export type ProductActions =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;
