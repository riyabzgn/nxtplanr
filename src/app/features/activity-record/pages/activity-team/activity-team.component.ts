import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import {
  faUser,
  faBackward,
  faFileExport,
  faEye,
  faAnglesDown,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { ActivityTeamService } from 'src/app/features/auth/services/activity-team.service';

@Component({
  selector: 'app-activity-team',
  templateUrl: './activity-team.component.html',
  styleUrls: ['./activity-team.component.scss'],
})
export class ActivityTeamComponent {
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  faUser = faUser;
  faBackward = faBackward;
  faFileExport = faFileExport;
  faEye = faEye;
  faAnglesDown = faAnglesDown;
  dataList: any[] = [];
  userList: any[] = [];
  isLoading: boolean = false;
  showDateRangeError: boolean = true;
  startDate: any;
  endDate: any;


  pageNo: number = 0;
  pageSize: number = 10;
  containsData: boolean = true;
  selectedTeam: any;

  constructor(
    private router: Router,
    private activityTeamService: ActivityTeamService,
    public datepipe: DatePipe,
    private activatedRoute: ActivatedRoute
  ) {}
  teamIdMap: { [teamName: string]: number } = {
    'Team Angular': 1,
    'Team Mobile App': 2,
    'Team Java': 3,
    'Team QA': 4,
  };
  ngOnInit() {
    this.dataList = [];
  }
  onTeamSelected(event: MatSelectChange) {
    this.showDateRangeError = true;
    const team = event.value;
    this.selectedTeam = team || 'Team Angular';
    this.pageNo = 0;
    this.fetchTableData();
  }

  fetchTableData() {
    if (!this.startDate && !this.endDate) {
      this.showDateRangeError = true;

      return;
    }
    this.isLoading = true;
    this.showDateRangeError = false;

    const teamId = this.teamIdMap[this.selectedTeam];
    this.activityTeamService
      .getTeamUserData(
        teamId,
        this.startDate,
        this.endDate,
        this.pageNo,
        this.pageSize
      )
      .subscribe({
        next: (response: any) => {
          const data = response?.content || [];
          this.dataList = data;
          this.isLoading = false;
          if (data.length < this.pageSize) {
            this.containsData = false;
          } else {
            this.containsData = true;
          }
        },
      });
  }

  gotoDetail(id:number | string,firstName: string, lastName: string) {
    this.router.navigate([`/activity/list/${id}`]);
    this.activityTeamService.setSelectedName(firstName, lastName);
  }

  goToPreviousPage() {
    if (this.pageNo > 0) {
      this.pageNo--;
      this.fetchTableData();
    }
  }

  goToNextPage() {
    if (this.containsData) {
      this.pageNo++;
      this.fetchTableData();
    }
  }
  startDateChanged(event: any) {
    let latest_date = new Date(event.target.value);
    this.startDate = this.datepipe.transform(latest_date, 'yyyy-MM-dd');
    console.log('Selected Start Date:', this.startDate);
  }

  endDateChanged(event: any) {
    let latest_date = new Date(event.target.value);
    this.endDate = this.datepipe.transform(latest_date, 'yyyy-MM-dd');
    console.log('Selected End Date:', this.endDate);

  }
}