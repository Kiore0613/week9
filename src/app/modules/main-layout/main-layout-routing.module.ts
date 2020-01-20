import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductsComponent } from "./components/products/products.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "products"
  },
  {
    path: "detail/:slug",
    component: ProductDetailComponent
  },
  {
    path: "cart",
    component: ShoppingCartComponent
  },
  {
    path: "products",
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {}
