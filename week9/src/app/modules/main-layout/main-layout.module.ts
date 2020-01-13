import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [MainLayoutComponent, ProfileComponent, ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class MainLayoutModule { }
