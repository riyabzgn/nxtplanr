import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiConfigService } from '../features/auth/services/api-config.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private apiConfigService: ApiConfigService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authKey = sessionStorage.getItem('authKey');
    console.log('Auth Key:', authKey);

    if (authKey) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authKey,
          // 'Content-Type': 'application/json',
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log(error);

          this.router.navigate(['/login']);
          return throwError(() => new Error('Not Authenticated'));
        } else if (error.status === 403) {
          console.log(error);

          this.toastr.error('Access Forbidden', 'Error');
          return throwError(() => new Error('Forbidden'));
        }

        console.error(error);
        return throwError(() => new Error());
      })
    );
  }
}
