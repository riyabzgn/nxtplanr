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

  pageNo: number = 0;
  pageSize: number = 6;
  isLoading: boolean = false;
  containsData: boolean = true;
  companyId: number | undefined;
  name: string = 'ESewa';
  description: string = '';

  constructor(private router: Router, private teamservice: TeamService, public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchTeamData();
  }

  fetchTeamData() {
    if (this.companyId) {
      this.teamservice
        .getAllTeams(this.companyId, this.pageNo, this.pageSize)
        .subscribe(
          (res: any) => {
            this.teamFormValue = res.content;
            this.containsData = this.teamFormValue.length === this.pageSize;
          },
          (error) => {
            console.error('Error fetching teams:', error);
          }
        );
    }
  }

  addTeamDetails() {
    this.router.navigate(['/team/details']);
  }

  deleteTeam(id: number) {
    if (confirm('Are you sure you want to delete this team?')) {
      this.isLoading = true;
      this.teamservice.deleteTeam(id).subscribe({
        next: (response: any) => {
          console.log('Team deleted:', response);
          this.fetchTeamData();
        },
        error: (error) => {
          console.error('Error deleting team:', error);
          this.isLoading = false;
        },
      });
    }
  }

  updateTeam(id: number) {
    this.router.navigate(['/team/details']);
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
    } else {
      this.pageNo--;
    }
  }
}
