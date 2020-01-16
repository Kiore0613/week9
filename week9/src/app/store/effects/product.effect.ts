import { Action } from "@ngrx/store";
import { ApiService } from "./../../modules/main-layout/services/api.service";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, catchError } from "rxjs/operators";
import {
  EProductActions,
  GetProductsByCategorySuccessAction,
  GetProductsByCategoryFailureAction,
  GetProductsByCategoryAction,
  GetProductsSuccessAction,
  GetProductsFailureAction,
  GetProductsAction
} from "../actions/product.actions";
import { of } from "rxjs";

@Injectable()
export class ProductEffects {
  constructor(private actions: Actions, private apiService: ApiService) {}

  @Effect()
  getProducts$ = this.actions.pipe(
    ofType<GetProductsAction>(EProductActions.GetProducts),
    switchMap(() => this.apiService.getProducts()),
    switchMap(products => of(new GetProductsSuccessAction(products))),
    catchError(error => of(new GetProductsFailureAction(error)))
  );

  @Effect()
  getProductsByCategory$ = this.actions.pipe(
    ofType<GetProductsByCategoryAction>(EProductActions.getProductsByCategory),
    switchMap(action => this.apiService.getProductsById(action.payload.id)),
    switchMap(categories =>
      of(new GetProductsByCategorySuccessAction(categories))
    ),
    catchError(error => of(new GetProductsByCategoryFailureAction(error)))
  );
}
