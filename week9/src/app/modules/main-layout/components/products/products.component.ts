import {
  GetProductsAction,
  GetProductsByCategoryAction
} from "./../../../../store/actions/product.actions";
import { Product } from "./../../models/product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppProductState } from "src/app/store/states/app.state";
import { getProducts } from "src/app/store/selectors/product.selector";
import { ToastService } from "src/app/modules/shared/services/toast.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(select(getProducts));

  constructor(
    private store: Store<AppProductState>,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(param => {
      if (param.has("category")) {
        this.toastService.showToast("error");
        const categoryId = Number(param.get("category"));
        this.store.dispatch(new GetProductsByCategoryAction(categoryId));
      } else {
        this.store.dispatch(new GetProductsAction());
      }
    });
  }
}
