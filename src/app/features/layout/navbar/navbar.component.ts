import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // standalone: true,
  // imports: [CommonModule]
})
export class NavbarComponent {
  collapsed= false;
  navData= navbarData;

}
