import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { ToastComponent } from "./components/toast/toast.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [NotFoundComponent, NavbarComponent, ToastComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [NotFoundComponent, NavbarComponent]
})
export class SharedModule {}
