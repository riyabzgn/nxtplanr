import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Team } from './pages/team';
import { CompanyService } from '../company/company.service';


@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseUrl = 'https://dev-fnxt-planr.f1soft.com.np/api/v1/teams'
  private teamFormData: any[] = [
   
  ];

  constructor(private http: HttpClient) {}

  getAllTeams(companyId: number, pageNo: number, pageSize: number): Observable<any> {
    const url = `${this.baseUrl}/${companyId}?pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  getTeamsID(id: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  updateTeam(id: any, teamDetails: any): Observable<any> {
    const url = `${this.baseUrl}/update`;
    return this.http.put(url, teamDetails);
  }

  addNewTeam(teamDetails: any): Observable<any> {
    const url = `${this.baseUrl}/create`;
    return this.http.post(url, teamDetails);
  }
  
  deleteTeam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}

