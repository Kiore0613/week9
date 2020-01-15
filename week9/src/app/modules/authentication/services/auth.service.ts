import { ResponseFromApi } from "./../../main-layout/models/responseFromApi";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "https://trainee-program.herokuapp.com/api/v1/users/";
  }

  login(credentials: User) {
    const data = {
      data: credentials
    };
    console.log(data);
    return this.http
      .post<ResponseFromApi<User>>(`${this.baseUrl}login`, data)
      .pipe(
        map(response => {
          console.log(response.data);
          return response.data;
        })
      );
  }
}
