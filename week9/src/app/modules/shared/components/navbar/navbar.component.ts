import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "./../../../authentication/services/auth.service";
import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  isLogin$: Observable<boolean>;
  @Output() toggle = new EventEmitter();
  @Output() search = new EventEmitter();
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLogin$ = this.authService.logIn$;
  }
  showMenu() {
    this.toggle.emit();
  }

  showProfile() {
    this.isHidden = !this.isHidden;
  }

  searchProduct(name: string) {
    this.search.emit(name);
  }

  redirectTo() {
    this.router.navigate(["/main"]);
  }
}
