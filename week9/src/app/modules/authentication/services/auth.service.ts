import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "https://trainee-program.herokuapp.com/api";
  }
}
