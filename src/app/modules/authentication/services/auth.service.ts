import { UserResponse } from './../models/user-response';
import { Credential } from '../models/credential';
import { LocalStorageService } from './local-storage.service';
import { ResponseFromApi } from '../../../core/models/response-from-api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  logIn = new BehaviorSubject<boolean>(false);
  readonly logIn$ = this.logIn.asObservable();
  private isLogged = false;
  user$ = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.baseUrl = 'https://trainee-program.herokuapp.com/api/v1/users/';
    this.logIn.next(this.isLogIn());
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
      this.logIn.next(true);
    }
    return this.isLogged;
  }

  logout() {
    this.logIn.next(false);
    return this.localStorageService.removeToken();
  }

  isLogIn() {
    this.logIn.next(this.localStorageService.hasToken());
    return this.localStorageService.hasToken();
  }

  handleErrorLogin(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `The email or password you’ve entered doesn’t match any account`;
    }
    return throwError(errorMessage);
  }
}
