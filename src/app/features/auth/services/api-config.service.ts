import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class ApiConfigService {
  // private apiBaseUrl =  'https://dev-fnxt-planr.f1soft.com.np/api/v1/users';
  private apiBaseUrl =  'https://dev-fnxt-planr.f1soft.com.np/api/v1';

  constructor() {}

  getLoginUrl(): string {
    return `${this.apiBaseUrl}/users/login`;
  }
  
  getAccessToken(): string {
    return sessionStorage.getItem('authKey') || ''; 
  }
 
}
