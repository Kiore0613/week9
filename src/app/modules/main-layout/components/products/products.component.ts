import { ApiService } from "./../../services/api.service";
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
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  animateChild,
  group
} from "@angular/animations";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  animations: [
    trigger("list", [
      transition(":enter, :leave", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          [
            stagger(100, [
              group([
                animate("0.5s", style({ opacity: 1 })),
                style({ transform: "scale(0.5)", opacity: 0 }),
                animate(
                  "2s cubic-bezier(.8,-0.6,0.2,1.5)",
                  style({ transform: "scale(1)", opacity: 1 })
                )
              ]),
              query("@items", stagger("500ms", animateChild()), {
                optional: true
              })
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(select(getProducts));

  constructor(
    private store: Store<AppProductState>,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
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

  redirectToDetail() {
    this.activatedRoute.queryParamMap.subscribe(param => {
      const name = param.get("name");
      this.apiService.getProductsByName(name);
    });
  }
}
