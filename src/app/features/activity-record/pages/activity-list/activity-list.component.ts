import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  activityId:any;
  userList1: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityListService: ActivityListService,
    public datepipe: DatePipe,
    private router: Router,
    private activityTeamService: ActivityTeamService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.activityId = this.activatedRoute.snapshot.params['id1'];
    this.selectedName = this.activityTeamService.getSelectedName();
    console.log(this.userId, this.activityId)
  }

  fetchUsersData() {
    if (!this.startDate && !this.endDate) {
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    this.activityListService
      .getUserWorkingHoursPerDay(this.userId, this.startDate, this.endDate)
      .subscribe({
        next: (response: any) => {
          const data = response?.content || [];
          this.userList = data;
          this.userList1 = response;
          this.isLoading = false;
        },
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
  goToUser( id1: number) {
    this.router.navigate([`/activity/list/${this.userId}/user/${this.userList1.userId}`]);
  }
}
