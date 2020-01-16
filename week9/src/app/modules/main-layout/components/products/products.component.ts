import {
  GetProductsAction,
  GetProductsByCategoryAction,
  GetProductsByNameAction
} from "./../../../../store/actions/product.actions";
import { Product } from "./../../models/product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppProductState } from "src/app/store/states/app.state";
import { getProducts } from "src/app/store/selectors/product.selector";
import { ToastService } from "src/app/core/services/toast.service";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(select(getProducts));
  private searchProduct = new BehaviorSubject<string>("");

  constructor(
    private store: Store<AppProductState>,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.searchProductSubject();
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

  private searchProductSubject() {
    this.searchProduct
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(product =>
        this.store.dispatch(new GetProductsByNameAction(product))
      );
  }

  search(name: string) {
    this.searchProduct.next(name);
  }
}
