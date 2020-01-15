import { ResponseFromApi } from './../../main-layout/models/responseFromApi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://trainee-program.herokuapp.com/api';
  }

  login(credentials: User) {
    return this.http
      .post<ResponseFromApi<User>>(`${this.baseUrl}login`, credentials)
      .pipe(tap(response => response.data));
  }
}
