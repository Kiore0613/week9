import { AuthService } from "./../../services/auth.service";
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastService } from "src/app/core/services/toast.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  form: FormGroup;
  isDisabled = false;
  errorMessage: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control("", [
        Validators.required,
        Validators.email
      ]),
      password: this.formBuilder.control("", [Validators.required])
    });
  }

  getControl(name: string) {
    return this.form.get(name);
  }

  login() {
    this.isDisabled = true;
    this.authService.login(this.form.value).subscribe(
      () => this.router.navigate(["main"]),
      error => {
        this.errorMessage = error;
        this.isDisabled = false;
        this.toastService.showToast("this.errorMessage");
      }
    );
  }
}
