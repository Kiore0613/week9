import { Product } from "./../../models/product";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(param => {
      let categoryId = +param.get("category");
      if (categoryId) {
        this.apiService.getProductsById(categoryId).subscribe(response => {
          this.products = response;
          console.log(response);
        });
        console.log("inside if");
      } else {
        this.apiService
          .getProducts()
          .subscribe(response => (this.products = response));
        console.log("inside else");
      }
    });
  }
}
