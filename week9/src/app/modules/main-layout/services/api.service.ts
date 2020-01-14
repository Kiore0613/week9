import { Category } from "./../models/category";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://trainee-program.herokuapp.com/api/";
  }

  getCategories() {
    return this.http.get<Category>(`${this.baseUrl}v1/categories`);
  }
}
