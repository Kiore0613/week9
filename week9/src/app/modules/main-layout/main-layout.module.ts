import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

@NgModule({
  declarations: [
    MainLayoutComponent,
    ProfileComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [CommonModule]
})
export class MainLayoutModule {}
