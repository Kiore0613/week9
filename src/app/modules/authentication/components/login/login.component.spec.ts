import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ToastService } from "src/app/core/services/toast.service";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MainLayoutComponent } from "src/app/modules/main-layout/components/main-layout/main-layout.component";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { MainLayoutModule } from "src/app/modules/main-layout/main-layout.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Button, By } from "protractor";
import { MatError } from "@angular/material/form-field";

fdescribe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        MainLayoutModule,
        SharedModule,
        CommonModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: "", component: MainLayoutComponent }
        ])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit("should create a form with 2 controls", () => {
    expect(component.form.contains("email")).toBeTruthy();
    expect(component.form.contains("password")).toBeTruthy();
  });

  fit("should render error messages when email is required", async(() => {
    const controlEmail = component.form.get("email");

    controlEmail.markAsTouched();
    controlEmail.setValue("");
    fixture.detectChanges();
    const matError = fixture.debugElement.nativeElement.querySelector("#email");
    expect(matError).toBeTruthy();
  }));

  fit("should render error messages when password is required", async(() => {
    const controlEmail = component.form.get("email");

    controlEmail.markAsTouched();
    controlEmail.setValue("");
    fixture.detectChanges();
    const matError = fixture.debugElement.nativeElement.querySelector("#email");
    expect(matError).toBeTruthy();
  }));

  fit("should create a button", () => {
    expect(
      fixture.debugElement.nativeElement.querySelector("#loginButton")
    ).toBeTruthy();
  });

  fit("login button should call onSubmit method", async(() => {
    const controlEmail = component.form.get("email");
    const controlPassword = component.form.get("password");
    const loginButton = fixture.debugElement.nativeElement.querySelector(
      "#loginButton"
    );

    controlEmail.setValue("example@mail.com");
    controlPassword.setValue("12345678");
    let spy = spyOn(component, "login");
    fixture.detectChanges();
    loginButton.click();
    expect(spy).toHaveBeenCalled();
  }));
});
