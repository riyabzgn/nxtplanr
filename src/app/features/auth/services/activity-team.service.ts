// activity-team.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityTeamService {
  private fakeApiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getTableData(): Observable<any> {
    return this.http.get<any>(this.fakeApiUrl);
  }
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.fakeApiUrl}/${id}`);
  }
}
