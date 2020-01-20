import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HttpClientModule } from "@angular/common/http";
import { CategoriesComponent } from "./components/categories/categories.component";
import { MatCardModule } from "@angular/material/card";
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoriesComponent,
    LikeDislikeComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    MatSidenavModule,
    HttpClientModule,
    MatCardModule,
    MainLayoutRoutingModule
  ],
  exports: [MainLayoutComponent, ProductsComponent, ProductDetailComponent]
})
export class MainLayoutModule {}
