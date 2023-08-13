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

  // teamList: Team[] = [];

  pageNo: number = 0;
  pageSize: number = 10;
  isLoading: boolean = false;
  containsData: boolean = true;

  companyId: any=1;
  name: string = 'ESewa';
  description: string = '';

  constructor(private router: Router, private teamservice: TeamService, public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchTeamData();
    
  }
  fetchTeamData() {
    this.teamservice.getTeams(
      this.companyId,
      this.name,
      this.description,
      this.pageNo,
      this.pageSize
    ).subscribe({
      next: (response: apiResponse) => {
        const data = response.data || []; 
        this.teamFormValue = data;
    
        if (data.length < this.pageSize) {
          this.containsData = false;
        } else {
          this.containsData = true;
        }
      },
      error: (error: any) => {
        console.error('Error fetching teams:', error);
   
      }
    });
  }
  
  goToPreviousPage() {
    if (this.pageNo > 0) {
      this.pageNo--;
      this.fetchTeamData();
    }
  }

  goToNextPage() {
    if (this.containsData) {
      this.pageNo++;
      this.fetchTeamData();
    }
  }

 addTeamDetails() {
    this.router.navigate(['/details']);
  }

  gotoActivity() {
    this.router.navigate(['']);
  }

  // deleteTeam(id: number) {
  //   this.teamservice.removeTeam(id).subscribe(() => {
  //     this.refreshTeam();
  //   });
  // }

  refreshTeam() {
    console.log('refreshTeam() called.');
  }

  updateTeam(id: number) {
    this.router.navigate([`/update/${id}`]);
    console.log('updateTeam() working');
  }


}
interface data {
  numberofElements: any;
}
interface apiResponse {
  message: string;
  data: Team[];

}

