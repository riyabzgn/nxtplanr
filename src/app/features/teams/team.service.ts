import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamFormData: any[] = [
    { id: '1', teamName: 'ABC', teamDesc: 'abcdefghijklmnopqrstuvwxyz' },
  ];

  constructor() {}

  updateTeam(team: any) {
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
}

// export class TeamService {
//   private apiUrl = 'https://example.com/api'; // Replace with your API URL

//   private teamFormData: any[] = [
//     { id: '1', teamName: 'ABC', teamDesc: 'abcdefghijklmnopqrstuvwxyz' },
//   ];

//   constructor(private http: HttpClient) {}


//   createTeam(data: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/teams`, data);
//   }

//   getTeams(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/teams`);
//   }

//   updateTeam(team: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/teams/${team.id}`, team);
//   }


//   deleteTeam(teamId: string): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/teams/${teamId}`);
//   }


//   getFormValue(): any[] {
//     return this.teamFormData;
//   }

//   updateLocalTeam(team: any) {
//     const index = this.teamFormData.findIndex((t: any) => t.id === team.id);
//     if (index !== -1) {
//       this.teamFormData[index] = team;
//     }
//   }


//   setLocalFormValue(data: any) {
//     this.teamFormData.push(data);
//   }
// }
