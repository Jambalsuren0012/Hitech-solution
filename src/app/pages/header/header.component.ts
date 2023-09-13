import { Component } from '@angular/core';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  facebook = faFacebook;
  instagram = faInstagram;
  twitter = faTwitter;
  earth = faEarth;
  phone = faPhone;
}
