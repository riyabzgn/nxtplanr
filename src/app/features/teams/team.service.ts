import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  
  private teamFormData: any[] = [
   
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

