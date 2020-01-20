import { ToastComponent } from "../../modules/shared/components/toast/toast.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  constructor(private toast: MatSnackBar) {}

  showToast(error: string) {
    this.toast.openFromComponent(ToastComponent, {
      data: error,
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ["toast"]
    });
  }
}
