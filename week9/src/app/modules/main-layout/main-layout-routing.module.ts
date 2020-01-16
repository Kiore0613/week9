import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductsComponent } from "./components/products/products.component";
import { NotFoundComponent } from "../shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "products"
  },
  {
    path: "detail",
    component: ProductDetailComponent
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
