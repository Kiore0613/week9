import { BehaviorSubject, Subscription } from "rxjs";
import { AuthService } from "./../../../authentication/services/auth.service";
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from "@angular/core";
import { Router } from "@angular/router";
import { distinctUntilChanged, debounceTime } from "rxjs/operators";
import { GetProductsByNameAction } from "src/app/store/actions/product.actions";
import { Store } from "@ngrx/store";
import { AppProductState } from "src/app/store/states/app.state";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isHidden = true;
  isLogged = false;
  authState: Subscription;
  private searchProduct = new BehaviorSubject<string>("");

  @Output() toggle = new EventEmitter();
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AppProductState>
  ) {}

  ngOnInit() {
    this.searchProductSubject();
    this.authState = this.authService.logIn$.subscribe(state => {
      this.isLogged = state;
    });
  }
  showMenu() {
    this.toggle.emit();
  }

  showProfile() {
    this.isHidden = !this.isHidden;
  }
  private searchProductSubject() {
    this.searchProduct
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(product =>
        this.store.dispatch(new GetProductsByNameAction(product))
      );
  }

  search(name: string) {
    this.searchProduct.next(name);
  }

  redirectTo() {
    this.router.navigate(["/main"]);
  }

  ngOnDestroy() {
    this.authState.unsubscribe();
  }
}
