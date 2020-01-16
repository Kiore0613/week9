import { Product } from "./../../modules/main-layout/models/product";
import { Action } from "@ngrx/store";

export enum EProductActions {
  GetProducts = "[Product] Get Products",
  getProductsByCategory = "[Category] get ProductsByCategory",
  GetProductsByCategoryFailure = "[Category] Get ProductsByCategoryFailure",
  GetProductsByCategorySuccess = "[Category] Get ProductsByCategorySuccess",
  GetProductsFailure = "[Product] Get ProductsFailure",
  GetProductsSuccess = "[Product] Get ProductsSuccess"
}

export class GetProductsAction implements Action {
  public readonly type = EProductActions.GetProducts;
}

interface CategoryPayload {
  id: number;
}

export class GetProductsByCategoryAction implements Action {
  public readonly type = EProductActions.getProductsByCategory;
  public payload: CategoryPayload;
  constructor(id: number) {
    this.payload = { id };
  }
}

export class GetProductsByCategorySuccessAction implements Action {
  public readonly type = EProductActions.GetProductsByCategorySuccess;
  constructor(public payload: Product[]) {}
}

export class GetProductsByCategoryFailureAction implements Action {
  public readonly type = EProductActions.GetProductsByCategoryFailure;
  public payload: any;
  constructor(error: any) {
    this.payload = { error };
  }
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
  | GetProductsByCategoryAction
  | GetProductsByCategoryFailureAction
  | GetProductsByCategorySuccessAction
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;
