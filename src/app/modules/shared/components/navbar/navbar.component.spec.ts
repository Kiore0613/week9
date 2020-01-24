import {
  AppProductState,
  initialAppProductState
} from "./../../../../store/states/app.state";
import { HttpClientModule } from "@angular/common/http";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NavbarComponent } from "./navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { RouterLinkWithHref } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { provideMockStore, MockStore } from "@ngrx/store//testing";
import { Store } from "@ngrx/store";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let debugElement;
  let routerLinks = [];
  let store: MockStore<{ product: AppProductState }>;
  let initialState = { product: initialAppProductState };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatInputModule,
        HttpClientModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    routerLinks = debugElement.queryAll(By.directive(RouterLinkWithHref));
    fixture.detectChanges();
    store = TestBed.get<Store<AppProductState>>(Store);
  });

  it("should create", () => {
    const loginButton = debugElement.querySelector("");
    const href = debugElement.query(By.directive(RouterLinkWithHref));
    expect(component).toBeTruthy();
  });
});
