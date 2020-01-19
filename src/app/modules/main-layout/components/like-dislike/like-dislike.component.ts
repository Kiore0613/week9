import { ApiService } from "./../../services/api.service";
import { AuthService } from "./../../../authentication/services/auth.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-like-dislike",
  templateUrl: "./like-dislike.component.html",
  styleUrls: ["./like-dislike.component.scss"]
})
export class LikeDislikeComponent implements OnInit, OnDestroy {
  isLogged = false;
  isLike = false;
  isDislike = false;
  authState: Subscription;
  @Input() idProduct: number;

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.authState = this.authService.logIn$.subscribe(state => {
      this.isLogged = state;
    });
  }

  ngOnDestroy() {
    this.authState.unsubscribe();
  }

  like() {
    this.isLike = true;
    this.isDislike = false;
    this.apiService
      .likesDislike(this.idProduct, 1)
      .subscribe(action => console.log(action));
  }

  dislike() {
    this.isLike = false;
    this.isDislike = true;
    this.apiService
      .likesDislike(this.idProduct, 0)
      .subscribe(action => console.log(action));
  }
}
