import { Category } from "./../../models/category";
import { ApiService } from "./../../services/api.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent {
  toggleFlag = false;
  categories;

  constructor(private apiService: ApiService) {}

  showMenu() {
    this.apiService
      .getCategories()
      .subscribe(response => (response = this.categories));
    this.toggleFlag = !this.toggleFlag;
  }
}
