import { Component } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  constructor( private router: Router) { }

  addTeamDetails(){
    this.router.navigate(['/team-details']);
  }
}
