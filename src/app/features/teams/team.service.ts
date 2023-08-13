import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Team } from './pages/team';

interface apiResponse {
  message: string;
  data: any;
}
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  fetchTeams(id: any) {

    throw new Error('Method not implemented.');
  }

  private apiBaseUrl = 'https://dev-fnxt-planr.f1soft.com.np/api/v1';

  private teamFormData: any[] = [
    // { id: '1', teamName: 'ABC', teamDesc: 'abcdefghijklmnopqrstuvwxyz' }
  ];

  private teamApiURL = "";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) { }

  updateTeamValue(team: any) {
    const index = this.teamFormData.findIndex((t: any) => t.id === team.id);
    if (index !== -1) {
      this.teamFormData[index] = team;
    }
  }
  setFormValue(data: any) {
    this.teamFormData.push(data);
  }

  getFormValue(): any {
    return this.teamFormData;
  }

  getTeams( 
    name:string,
    description:string,
    companyId:any,
    pageNo: number,
    pageSize: number
    ): Observable<apiResponse> {
   console.log('companyId',companyId);
      return this.http.get<apiResponse>(`${this.apiBaseUrl}teams/1?pageNo=${pageNo}&pageSize=${pageSize}`,
      );
    
  }
  addTeam(team: Team): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl + 'teams/create', JSON.stringify(team) ,);
  }

  getTeamsByID(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}teams/detail/${id}`);

  }
  updateTeam(team: Team): Observable<apiResponse> {
    return this.http.put<apiResponse>(this.apiBaseUrl + '/Teamapi/' + team.id, JSON.stringify(team));
  }
  removeTeam(id: number) {
    return this.http.delete<apiResponse>(this.apiBaseUrl + 'Teamapi/' + id, this.httpOptions);
  }
  errorHandler(error: {
    error: {
      message: string;
    }; status: any; message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

