import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  isHidden = true;
  constructor(private router: Router) {}

  @Output() toggle = new EventEmitter();
  @Output() search = new EventEmitter();

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
