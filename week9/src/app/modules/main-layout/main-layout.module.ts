import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: MainLayoutComponent
  },
  {
    path: "products",
    component: ProductsComponent
  }
];
@NgModule({
  declarations: [
    MainLayoutComponent,
    ProfileComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    MainLayoutComponent,
    ProfileComponent,
    ProductsComponent,
    ProductDetailComponent
  ]
})
export class MainLayoutModule {}
