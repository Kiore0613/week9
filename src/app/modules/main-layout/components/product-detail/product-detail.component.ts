import { product } from "src/app/testing/products-test";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  productDetail: Product = null;
  product: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.product = this.activatedRoute.snapshot.paramMap.get("slug");
    this.apiService.getProductDetail(this.product).subscribe(response => {
      this.productDetail = response;
    });
  }
}
