import { Product } from "./../../modules/main-layout/models/product";
import { Action } from "@ngrx/store";

export enum EProductActions {
  GetProducts = "[Product] Get Products",
  GetProductsFailure = "[Product] Get ProductsFailure",
  GetProductsSuccess = "[Product] Get ProductsSuccess",
  getProductsByCategory = "[Category] get ProductsByCategory",
  GetProductsByCategoryFailure = "[Category] Get ProductsByCategoryFailure",
  GetProductsByCategorySuccess = "[Category] Get ProductsByCategorySuccess",
  getProductsByName = "[Product] get ProductsByName",
  GetProductsByNameFailure = "[Product] Get ProductsByNameFailure",
  GetProductsByNameSuccess = "[Product] Get ProductsByNameSuccess"
}

interface CategoryPayload {
  id: number;
}

interface NameProductPayload {
  name: string;
}
export class GetProductsAction implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsByNameAction implements Action {
  public readonly type = EProductActions.getProductsByName;
  public payload: NameProductPayload;
  constructor(name: string) {
    this.payload = { name };
  }
}

export class GetProductsByNameSuccessAction implements Action {
  public readonly type = EProductActions.GetProductsByNameSuccess;
  constructor(public payload: Product[]) {}
}

export class GetProductsByNameFailureAction implements Action {
  public readonly type = EProductActions.GetProductsByNameFailure;
  public payload: any;
  constructor(error: any) {
    this.payload = { error };
  }
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
  | GetProductsByNameSuccessAction
  | GetProductsByNameFailureAction
  | GetProductsByNameAction
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;
