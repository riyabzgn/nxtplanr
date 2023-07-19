import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
interface SidenavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // standalone: true,
  // imports: [CommonModule]
})
export class NavbarComponent {

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
    
  collapsed= false;
  screenWidth= 0;
  navData= navbarData;
  toggleCollapse(): void {
    this.collapsed= !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed= false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }

}
