import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor() {}

  @Output() toggle = new EventEmitter();

  showMenu() {
    this.toggle.emit();
  }
}
