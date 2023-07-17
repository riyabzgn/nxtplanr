import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient, private apiConfigService: ApiConfigService) {}

  login(requestBody:any) {
    const loginUrl = this.apiConfigService.getLoginUrl();
    
    return this.httpClient.post(loginUrl, requestBody, {observe: 'response'});
  }

  setAuthKeyInStorage(authKey: string) {
    sessionStorage.setItem('authKey', authKey);
  }

  // isLoggedIn(): boolean {
  //   const authKey = sessionStorage.getItem('authKey');
  //  // Return true if authKey exists otherwise return false
  //   return !!authKey; 
  // }
}
