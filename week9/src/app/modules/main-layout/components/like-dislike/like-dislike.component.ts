import { LikeDislike } from "./../../models/like-dislike";
import { ApiService } from "./../../services/api.service";
import { AuthService } from "./../../../authentication/services/auth.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-like-dislike",
  templateUrl: "./like-dislike.component.html",
  styleUrls: ["./like-dislike.component.scss"]
})
export class LikeDislikeComponent implements OnInit {
  isDisabled = false;
  @Input() idProduct: number;

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    if (!this.authService.isLogIn()) {
      this.isDisabled = true;
    }
  }

  like() {
    this.apiService
      .likesDislike(this.idProduct, 1)
      .subscribe(actions => console.log(actions));
  }

  dislike() {}
}
