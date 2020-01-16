import { GetProductsAction } from "./../../../../store/actions/product.actions";
import { Product } from "./../../models/product";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppProductState } from "src/app/store/states/app.state";
import { getProducts } from "src/app/store/selectors/product.selector";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(select(getProducts));

  constructor(
    private store: Store<AppProductState>,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("testing");
    this.activatedRoute.queryParamMap.subscribe(param => {
      if (param.has("category")) {
        const categoryId = +param.get("category");
        this.products$ = this.apiService.getProductsById(categoryId);
      } else {
        this.products$ = this.store.pipe(select(getProducts));
        this.store.dispatch(new GetProductsAction());
      }
    });
  }
}
