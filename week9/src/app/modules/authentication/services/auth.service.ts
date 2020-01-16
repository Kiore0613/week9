import { UserResponse } from "./../models/user-response";
import { Credential } from "../models/credential";
import { LocalStorageService } from "./local-storage.service";
import { ResponseFromApi } from "../../../core/models/response-from-api";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private baseUrl: string;
  private isLogged = false;
  user$ = new BehaviorSubject<User>(null);
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.baseUrl = "https://trainee-program.herokuapp.com/api/v1/users/";
  }

  login(credentials: Credential) {
    const data = {
      data: credentials
    };
    return this.http
      .post<ResponseFromApi<UserResponse>>(`${this.baseUrl}login`, data)
      .pipe(
        map(response => {
          this.user$.next(response.data.user);
          this.localStorageService.setToken(response.data.token);
          this.isLogged = true;
          return response.data;
        })
      );
  }

  logged() {
    if (this.localStorageService.getToken()) {
      this.isLogged = true;
    }
    return this.isLogged;
  }

  isLogIn() {
    return this.localStorageService.hasToken();
  }
}
