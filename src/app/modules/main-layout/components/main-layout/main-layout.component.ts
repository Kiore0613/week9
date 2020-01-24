import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  toggleFlag = false;

  constructor() {}

  showMenu() {
    this.toggleFlag = !this.toggleFlag;
  }
}
