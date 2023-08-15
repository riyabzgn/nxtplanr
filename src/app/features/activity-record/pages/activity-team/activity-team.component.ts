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
  faLightbulb,
  faClipboard,
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
  faClipboard = faClipboard;
  faBackward = faBackward;
  faFileExport = faFileExport;
  faEye = faEye;
  faLightbulb = faLightbulb;
  faAnglesDown = faAnglesDown;
  dataList: any[] = [];
  userList: any[] = [];
  isLoading: boolean = false;
  showDateRangeError: boolean = true;
  startDate: any;
  endDate: any;

  pageNo: number = 0;
  pageSize: number = 8;
  containsData: boolean = true;
  selectedTeam: any;

  hasData: boolean = false;
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
    this.selectedTeam = team;
    this.pageNo = 0;
   
   
    const selectedTeamId = this.teamIdMap[this.selectedTeam];
    console.log('Team ID Map:', this.teamIdMap);
    console.log('Selected Team:', this.selectedTeam);
    console.log('Selected Team ID:', selectedTeamId);

  }
  exportUserData() {
    if (!this.startDate || !this.endDate) {
      this.showDateRangeError = true;
      return;
    }

    const teamId = this.teamIdMap[this.selectedTeam];
    this.activityTeamService
      .exportUserDataToCsv(
        teamId,
        this.startDate,
        this.endDate,
        this.pageNo,
        this.pageSize
      )
      .subscribe((response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' });

        const url = window.URL.createObjectURL(blob);

        let a = document.createElement('a');

        a.href = url;[]

        a.download = 'Team_Users_DAR.csv';
        a.click();
        window.URL.revokeObjectURL(url);
      });
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
          this.hasData = data.length > 0;
          if (data.length < this.pageSize) {
            this.containsData = false;
          } else {
            this.containsData = true;
          }
          
        },
      });
  }

  gotoDetail(id: number | string, firstName: string, lastName: string) {
    const queryParams = {
      teamId: this.teamIdMap[this.selectedTeam]
    };
    this.router.navigate([`/activity/list/${id}`],
    {queryParams: queryParams}
    );
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