import { Product } from "./../models/product";
import { ResponseFromApi } from "../../../core/models/response-from-api";
import { Category } from "./../models/category";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { likeDislikeResponse } from "../models/like-dislike-response";

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

  getProductDetail(slug: string) {
    return this.http
      .get(
        `${this.baseUrl}/products/${slug}?include=image_attachment.blob,category,master`
      )
      .pipe(map((response: ResponseFromApi<Product>) => response.data));
  }

  getProductsByName(name: string) {
    return this.http
      .get(`${this.baseUrl}/products`, {
        params: {
          ...(name && { "filter[name_count]": name }),
          include: "image_attachment.blob,category,master"
        }
      })
      .pipe(map((response: ResponseFromApi<Product[]>) => response.data));
  }

  likesDislike(idProduct: number, action: number) {
    const actions = {
      data: {
        product_id: idProduct,
        kind: action
      }
    };
    console.log(actions);
    return this.http
      .post<ResponseFromApi<likeDislikeResponse>>(
        `${this.baseUrl}/likes`,
        actions
      )
      .pipe(
        map(response => {
          return response.data;
        })
      );
  }

  getProducts() {
    return this.http
      .get(
        `${this.baseUrl}/products?include=image_attachment.blob,category,master`
      )
      .pipe(map((response: ResponseFromApi<Product[]>) => response.data));
  }
}
