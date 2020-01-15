import { ResponseFromApi } from "./../models/responseFromApi";
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
    this.baseUrl = "https://trainee-program.herokuapp.com/api/";
  }

  getCategories() {
    return this.http
      .get(`${this.baseUrl}v1/categories`)
      .pipe(map((response: ResponseFromApi<Category[]>) => response.data));
  }
}
