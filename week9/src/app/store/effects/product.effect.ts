import { ApiService } from "./../../modules/main-layout/services/api.service";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, catchError } from "rxjs/operators";
import {
  EProductActions,
  GetProductsSuccessAction,
  GetProductsFailureAction,
  GetProductsAction
} from "../actions/product.actions";
import { of } from "rxjs";

@Injectable()
export class ProductEffects {
  constructor(private _actions: Actions, private _apiService: ApiService) {}

  @Effect()
  getProducts$ = this._actions.pipe(
    ofType<GetProductsAction>(EProductActions.GetProducts),
    switchMap(() => this._apiService.getProducts()),
    switchMap(products => of(new GetProductsSuccessAction(products))),
    catchError(error => of(new GetProductsFailureAction(error)))
  );
}
