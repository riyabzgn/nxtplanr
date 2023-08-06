import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class ApiConfigService {
  // private apiBaseUrl =  'https://dev-fnxt-planr.f1soft.com.np/api/v1/users';
  private apiBaseUrl =  'https://e6cb-110-44-114-34.ngrok-free.app/api/v1';

  constructor() {}

  getLoginUrl(): string {
    return `${this.apiBaseUrl}/users/login`;
  }
  
  getAccessToken(): string {
    return sessionStorage.getItem('authKey') || ''; 
  }
 
}
