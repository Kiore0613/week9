import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef
} from '@angular/material/snack-bar';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  constructor(
    public snackbarRef: MatSnackBarRef<ToastComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ) {}
}
