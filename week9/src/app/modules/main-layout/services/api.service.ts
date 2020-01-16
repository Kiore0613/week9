import { Product } from "./../models/product";
import { ResponseFromApi } from "../../shared/models/response-from-api";
import { Category } from "./../models/category";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://trainee-program.herokuapp.com/api/v1";
  }

  getCategories() {
    return this.http
      .get(`${this.baseUrl}/categories`)
      .pipe(map((response: ResponseFromApi<Category[]>) => response.data));
  }

  getProductsById(id: number) {
    return this.http
      .get(
        `${this.baseUrl}/products?filter[category_id_eq]=${id}&include=image_attachment.blob,category,master`
      )
      .pipe(map((response: ResponseFromApi<Product[]>) => response.data));
  }

  getProducts() {
    return this.http
      .get(
        `${this.baseUrl}/products?include=image_attachment.blob,category,master`
      )
      .pipe(map((response: ResponseFromApi<Product[]>) => response.data));
  }
}
