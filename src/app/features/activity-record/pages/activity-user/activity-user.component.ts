import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import {
  faUser,
  faBackward,
  faFileExport,
  faEye,
  faAnglesLeft,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons';
import { ActivityTeamService } from 'src/app/features/auth/services/activity-team.service';
import { ActivityUserService } from 'src/app/features/auth/services/activity-user.service';

@Component({
  selector: 'app-activity-user',
  templateUrl: './activity-user.component.html',
  styleUrls: ['./activity-user.component.scss'],
})
export class ActivityUserComponent implements OnInit {
  faUser = faUser;
  faBackward = faBackward;
  faFileExport = faFileExport;
  faAnglesLeft =faAnglesLeft;
  faAnglesRight =faAnglesRight;
  faEye = faEye;
  userId: any;
  selectedName: string = '';
  isLoading: boolean = true;
  taskStartDate: any;
  taskEndDate: any;
  activityList: any[] = [];
  pageNo: number = 0;
  pageSize: number = 8;
  containsData: boolean = true;
  showDateRangeError: boolean = true;
  activityId: any;
  teamId: any;
  endDate: any;
  startDate: any;
  hasData: boolean = false;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityTeamService: ActivityTeamService,
    private activityUserService: ActivityUserService,
    public datepipe: DatePipe,
    private router: Router,
    private location: Location 
   
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.activityId = this.activatedRoute.snapshot.params['id1'];
    console.log('User ID:', this.userId, 'Activity ID:', this.activityId);
    this.selectedName = this.activityTeamService.getSelectedName();

    this.activatedRoute.queryParams.subscribe(params => {
    
      this.teamId = params['teamId']; 
    });
  
    console.log('Team ID:', this.teamId);
    
  }

  fetchActivityRecord() {
    
    if (this.taskStartDate && this.taskEndDate) {
      this.taskStartDate = new Date(this.taskStartDate);
      this.taskEndDate = new Date(this.taskEndDate);
    }
    this.isLoading = true;
    this.showDateRangeError = false;

    this.activityUserService
      .getUserActivityRecord(
        this.activityId,
        this.taskStartDate,
        this.taskEndDate,
        this.pageNo,
        this.pageSize
      )
      .subscribe({
        next: (response: any) => {
          const data = response?.content || [];
          this.activityList = data;
          this.hasData = data.length > 0;
          this.isLoading = false;
          if (data.length < this.pageSize) {
            this.containsData = false;
          } else {
            this.containsData = true;
          }
        },
      });
  }
  exportUserDetailsData() {
    if (!this.taskStartDate || !this.taskEndDate) {
      
      this.showDateRangeError = true;
      return;
    }

   
    this.activityUserService
      .exportUserDetailsToCsv(
        this.userId,
     
        this.taskStartDate,
        this.taskEndDate,
        this.pageNo,
        this.pageSize
      )
      .subscribe((response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' });

        const url = window.URL.createObjectURL(blob);

        let a = document.createElement('a');

        a.href = url;

        a.download = 'Users_PerDay_DAR.csv';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
  
  goToPreviousPage() {
    if (this.pageNo > 0) {
      this.pageNo--;
      this.fetchActivityRecord();
    }
  }

  goToNextPage() {
    if (this.containsData) {
      this.pageNo++;
      this.fetchActivityRecord();
    }
  }
  startDateChanged(event: any) {
    let latest_date = new Date(event.target.value);
    this.taskStartDate = this.datepipe.transform(latest_date, 'yyyy-MM-dd');
    console.log('Selected Start Date:', this.taskStartDate);
  }

  endDateChanged(event: any) {
    let latest_date = new Date(event.target.value);
    this.taskEndDate = this.datepipe.transform(latest_date, 'yyyy-MM-dd');
    console.log('Selected End Date:', this.taskEndDate);

  }
  goBack(){
   
  }
}