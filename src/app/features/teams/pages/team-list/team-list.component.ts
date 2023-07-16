import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {



  teamFormValue: any[]=[];

  constructor(private router: Router, private teamservice: TeamService){
    this.teamFormValue= this.teamservice.getFormValue();
  }

  addTeamDetails(){
    this.router.navigate(['/team-details']);
  }
  

  deleteTeam(index: number){
    this.teamFormValue.splice(index, 1);
  }

  updateTeam(id: number){
    this.router.navigate([`/team-update/${id}`]);
    console.log('updateTeam() working');
  }
}
