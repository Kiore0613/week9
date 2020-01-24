import { ToastService } from './../../../../core/services/toast.service';
import { Product } from './../../models/product';
import { ApiService } from './../../services/api.service';
import { AuthService } from './../../../authentication/services/auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss']
})
export class LikeDislikeComponent implements OnInit, OnDestroy {
  isLogged = false;
  isLike = false;
  isDislike = false;
  authState: Subscription;
  @Input() product: Product;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.authState = this.authService.logIn$.subscribe(state => {
      this.isLogged = state;
    });
  }

  addToCart() {
    this.toastService.showToast('Shopping Cart doesn\'t work yet');
  }

  ngOnDestroy() {
    this.authState.unsubscribe();
  }

  like() {
    this.isLike = true;
    this.isDislike = false;
    this.apiService
      .likesDislike(this.product.id, 1)
      .subscribe(action => action);
  }

  dislike() {
    this.isLike = false;
    this.isDislike = true;
    this.apiService
      .likesDislike(this.product.id, 0)
      .subscribe(action => action);
  }
}
