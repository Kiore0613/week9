import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./modules/shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/main-layout/main-layout.module").then(
        module => module.MainLayoutModule
      )
  },
  {
    path: "authentication",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        module => module.AuthenticationModule
      )
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
