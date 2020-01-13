import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [NotFoundComponent, NavbarComponent],
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatMenuModule],
  exports: [NotFoundComponent, NavbarComponent]
})
export class SharedModule {}
