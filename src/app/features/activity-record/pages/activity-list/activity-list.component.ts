import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  faUser,
  faBackward,
  faFileExport,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

import { ActivityTeamService } from 'src/app/features/auth/services/activity-team.service';
import { ActivityListService } from 'src/app/features/auth/services/activity-list.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
  @Input() teamId: number | undefined;
  faUser = faUser;
  faBackward = faBackward;
  faFileExport = faFileExport;
  faEye = faEye;
  selectedName: string = '';
  isLoading: boolean = true;
  startDate: any;
  endDate: any;
  showDateRangeError: boolean = true;
  userList: any[] = [];
  userId: any;
  activityId: any;
  userList1: any;
  dateRangeErrorMessage: string = '';
  hasData: boolean = false;
  weekDays: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityListService: ActivityListService,
    public datepipe: DatePipe,
    private router: Router,
    private toastr: ToastrService,
    private activityTeamService: ActivityTeamService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.activityId = this.activatedRoute.snapshot.params['id1'];
    this.selectedName = this.activityTeamService.getSelectedName();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.teamId = params['teamId'];
    });
    console.log(this.userId, this.activityId);
  }

  fetchUsersData() {
    if (!this.startDate && !this.endDate) {
      this.isLoading = false;
      this.toastr.error(
        'Both start date and end date are required.',
        'Required'
      );
      return;
    }
    const startDateObj = new Date(this.startDate);
    const endDateObj = new Date(this.endDate);

    const timeDifference = endDateObj.getTime() - startDateObj.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    if (daysDifference < 7 || daysDifference > 31) {
      this.isLoading = false;
      this.toastr.error(
        'Date range must be at least 7 days or max 31 days.',
        'Please Select Appropriate Date'
      );
      return;
    }
    this.isLoading = true;
    this.showDateRangeError = false;
    this.activityListService
      .getUserWorkingHoursPerDay(this.userId, this.startDate, this.endDate)
      .subscribe({
        next: (response: any) => {
          const data = response?.content || [];
          this.userList = data;
          this.userList1 = response;
          this.hasData = data.length > 0;
          this.isLoading = false;
        },
      });
  }
  getUserWorkingHoursForDay(dayOfWeek: string): string {
    const matchingDay = this.userList.find(
      (item) => this.datepipe.transform(item.taskDate, 'EEEE') === dayOfWeek
    );
    return matchingDay ? matchingDay.workingHours : '';
  }

  getUserActivityIdForDay(dayOfWeek: string): number {
    const matchingDay = this.userList.find(
      (item) => this.datepipe.transform(item.taskDate, 'EEEE') === dayOfWeek
    );
    return matchingDay ? matchingDay.activityId : -1;
  }
  exportUserWeekData() {
    if (!this.startDate || !this.endDate) {
      this.showDateRangeError = true;
      return;
    }

    this.activityListService
      .exportListDataToCsv(
        this.teamId,
        this.userId,
        this.startDate,
        this.endDate
      )
      .subscribe((response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');

        a.href = url;
        a.download = 'Users_Week_DAR';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
  startDateChanged(event: any) {
    let latest_date = new Date(event.target.value);
    this.startDate = this.datepipe.transform(latest_date, 'yyyy-MM-dd');
  }

  endDateChanged(event: any) {
    let latest_date = new Date(event.target.value);
    this.endDate = this.datepipe.transform(latest_date, 'yyyy-MM-dd');
  }
  goToUser(id1: number) {
    this.router.navigate(
      [`/activity/list/${this.userId}/user/${this.userList1.userId}`],
      {
        queryParams: {
          teamId: this.teamId,
        },
      }
    );
  }
}

