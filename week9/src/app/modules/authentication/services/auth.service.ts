import { UserResponse } from "./../models/user-response";
import { Credential } from "../models/credential";
import { LocalStorageService } from "./local-storage.service";
import { ResponseFromApi } from "../../../core/models/response-from-api";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";
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
          return response.data, (this.isLogged = true);
        }),
        catchError(error => this.handleErrorLogin(error))
      );
  }

  logged() {
    if (this.localStorageService.getToken()) {
      this.isLogged = true;
    }
    return this.isLogged;
  }

  logout() {
    return this.localStorageService.removeToken();
  }

  isLogIn() {
    return this.localStorageService.hasToken();
  }

  handleErrorLogin(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `The email or password you’ve entered doesn’t match any account`;
    }
    return throwError(errorMessage);
  }
}
