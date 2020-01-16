import {
  GetProductsAction,
  GetProductsByCategoryAction
} from "./../../../../store/actions/product.actions";
import { Product } from "./../../models/product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppProductState } from "src/app/store/states/app.state";
import {
  getProducts,
  getProductsByCategory
} from "src/app/store/selectors/product.selector";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(select(getProducts));

  constructor(
    private store: Store<AppProductState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(param => {
      if (param.has("category")) {
        const categoryId = Number(param.get("category"));
        this.store.dispatch(new GetProductsByCategoryAction(categoryId));
      } else {
        this.store.dispatch(new GetProductsAction());
      }
    });
  }
}
