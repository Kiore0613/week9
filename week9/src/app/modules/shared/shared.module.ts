import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [NotFoundComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
