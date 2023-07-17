import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../features/auth/services/api-config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private apiConfigService: ApiConfigService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authKey = sessionStorage.getItem('authKey');
    console.log('Auth Key:', authKey); 

    
    if (authKey) {
      request = request.clone({
        setHeaders: {
          Authorization: authKey
        }
      });
    }

    request = request.clone({
      setHeaders: {
        "Content-Type": "application/json"
      }
    });

    return next.handle(request);
  }
}