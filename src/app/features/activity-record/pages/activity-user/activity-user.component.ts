import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
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
  pageSize: number = 10;
  containsData: boolean = true;
  showDateRangeError: boolean = true;
  activityId: any;
  
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityTeamService: ActivityTeamService,
    private activityUserService: ActivityUserService,
    public datepipe: DatePipe,
   
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.activityId = this.activatedRoute.snapshot.params['id1'];
    console.log( this.userId, this.activityId);
    this.selectedName = this.activityTeamService.getSelectedName();
  }

  fetchActivityRecord() {
    if (!this.taskStartDate && !this.taskEndDate) {
      this.showDateRangeError = true;

      return;
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
          this.isLoading = false;
        },
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