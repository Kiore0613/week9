import { AuthService } from "./../../../authentication/services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-like-dislike",
  templateUrl: "./like-dislike.component.html",
  styleUrls: ["./like-dislike.component.scss"]
})
export class LikeDislikeComponent implements OnInit {
  isDisabled = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.isLogIn()) {
      this.isDisabled = true;
    }
  }
}
