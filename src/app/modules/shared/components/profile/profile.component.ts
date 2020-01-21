import { Router } from '@angular/router';
import { AuthService } from './../../../authentication/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
