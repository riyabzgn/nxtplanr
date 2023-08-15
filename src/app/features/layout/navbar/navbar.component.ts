import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { ToastrService, ActiveToast } from 'ngx-toastr';
interface SidenavToggle {
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
  constructor(private router: Router, private toastService: ToastrService) {}
  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  logout(): void {
    const confirmation = window.confirm('Are you sure you want to logout?');
    if (confirmation) {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
    if (!sessionStorage.getItem('auth_key')) {
      this.toastService.show(' Redirected to login',
      'No Auth Key',
      {
      
        progressBar: true,
        timeOut: 3000,
        enableHtml: true,
        toastClass: 'toast-error', 
      }
    );
  
    }
  }
}
