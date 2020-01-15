import { RouterModule } from "@angular/router";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HttpClientModule } from "@angular/common/http";
import { CategoriesComponent } from "./components/categories/categories.component";

@NgModule({
  declarations: [
    MainLayoutComponent,
    ProfileComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    MatSidenavModule,
    HttpClientModule
  ],
  exports: [
    MainLayoutComponent,
    ProfileComponent,
    ProductsComponent,
    ProductDetailComponent
  ]
})
export class MainLayoutModule {}
