import { AuthorizedGuard } from "./modules/authentication/guards/authorized.guard";
import { LoginComponent } from "./modules/authentication/components/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./modules/shared/components/not-found/not-found.component";
import { MainLayoutComponent } from "./modules/main-layout/components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "main"
  },
  {
    path: "main",
    component: MainLayoutComponent,
    loadChildren: () =>
      import("./modules/main-layout/main-layout.module").then(
        m => m.MainLayoutModule
      ),
    data: { animation: "main" }
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthorizedGuard],
    data: { animation: "login" }
  },
  {
    path: "**",
    component: NotFoundComponent,
    data: { animation: "**" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
