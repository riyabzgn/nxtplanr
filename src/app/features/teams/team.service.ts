import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {Team} from './pages/team';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  fetchTeams(id: any) {
    throw new Error('Method not implemented.');
  }

  private apiBaseUrl = 'https://1a52-110-34-13-219.ngrok-free.app/api/v1';

  private teamFormData: any[]=[
    {id:'1', teamName: 'ABC', teamDesc: 'abcdefghijklmnopqrstuvwxyz'}
  ];
  
  private teamApiURL = ""; 
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

  constructor(public httpClient: HttpClient) { }

  updateTeamValue(team : any){
    const index= this.teamFormData.findIndex((t:any)=> t.id === team.id);
    if(index!== -1){
      this.teamFormData[index]=team;
    }
  }

  setFormValue(data: any){
    this.teamFormData.push(data);
  }

  getFormValue(): any{
    return this.teamFormData;
  }

  getTeams(): Observable <apiResponse> {
    return this.httpClient.get <apiResponse> (this.apiBaseUrl + 'teams/1?pageNo=0&pageSize=50');
}
addTeam(team: Team): Observable < any > {
    return this.httpClient.post < any > (this.apiBaseUrl + 'teams/create', JSON.stringify(team), this.httpOptions);
}

getTeamsByID(id: number): Observable < any > {
    return this.httpClient.get < any > (this.apiBaseUrl + 'teams/detail/2' + id);
}
updateTeam(team: Team): Observable < apiResponse > {
    return this.httpClient.put < apiResponse > (this.teamApiURL + '/Teamapi/' + team.id, JSON.stringify(team), this.httpOptions);
}
removeTeam(id: number) {
    return this.httpClient.delete < apiResponse > (this.teamApiURL + 'Teamapi/' + id, this.httpOptions);
}
errorHandler(error: {
    error: {
        message: string;
    };status: any;message: any;
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

interface apiResponse{
  message:string;
  data:any;
}
