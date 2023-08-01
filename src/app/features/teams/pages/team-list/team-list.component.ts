import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../team.service';
import { HttpClient } from '@angular/common/http';
import { Team } from '../team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teamFormValue: any[] = [];

  teamList: Team[] = [];

  constructor(private router: Router, private teamservice: TeamService, public http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTeams();
    // this.getTeamById(2);
  }

  fetchTeams() {
    this.teamservice.getTeams().subscribe((data: any) => {
      console.log('data', data);
      this.teamFormValue = data?.content;
      });
  }

  // getTeamById(id: number) {
  //   const apiUrl = `https://1a52-110-34-13-219.ngrok-free.app/api/v1/teams/detail/${id}`;

  //   const headers = {
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyVHlwZSI6IlJPTEVfQURNSU4iLCJzdWIiOiJkYXdhQGdtYWlsLmNvbSIsImlhdCI6MTY5MDI2NTQyOSwiZXhwIjoxNjkwMzAxNDI5fQ.6Kg5u5vfHaGZD094DgkRFk-c71jMLULrP6TBkWY0-cM'
  //   };

  //   this.http.get(apiUrl, { headers }).subscribe(
  //     (response: any) => {
      
  //       console.log('Team by ID:', response);
  //     },
  //     (error: any) => {
  //       console.error('Error fetching team by ID:', error);
  //     }
  //   );
  // }

  addTeamDetails() {
    this.router.navigate(['/details']);
  }

  gotoActivity() {
    this.router.navigate(['']);
  }

  deleteTeam(id: number) {
    this.teamservice.removeTeam(id).subscribe(() => {
      this.refreshTeam();
    });
  }

  refreshTeam() {
    console.log('refreshTeam() called.');
  }

  updateTeam(id: number) {
    this.router.navigate([`/update/${id}`]);
    console.log('updateTeam() working');
  }


}
interface data{
  numberofElements: any;
}
interface apiResponse {
  message: string;
  data: Team[];

}

