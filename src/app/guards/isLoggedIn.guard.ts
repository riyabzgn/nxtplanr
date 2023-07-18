import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../features/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class isLoggedInGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // const isAuthenticated = this.loginService.isLoggedIn();
    if (sessionStorage['authKey']) {
      // user pailai authenticated cha bhaye access dine
      return true;
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['']);
      return false;
    }
  }
}
