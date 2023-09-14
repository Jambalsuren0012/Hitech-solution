import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss'],
})
export class Navbar2Component {
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  icon = faBars;
}
