import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import {
  faUser,
  faBackward,
  faFileExport,
  faEye,
  faAnglesDown,
} from '@fortawesome/free-solid-svg-icons';
import { ActivityTeamService } from 'src/app/features/auth/services/activity-team.service';
@Component({
  selector: 'app-activity-team',
  templateUrl: './activity-team.component.html',
  styleUrls: ['./activity-team.component.scss'],
})
export class ActivityTeamComponent {
  faUser = faUser;
  faBackward = faBackward;
  faFileExport = faFileExport;
  faEye = faEye;
  faAnglesDown = faAnglesDown;
  formValue: any[] = [];
  isLoading: boolean = true;
  constructor(
    private router: Router,
    private activityTeamService: ActivityTeamService
  ) {}

  ngOnInit() {
    this.fetchTableData();
    this.formValue = [];
  }

  fetchTableData() {
    this.activityTeamService.getTableData().subscribe({
      next:
        (data) => {
          this.formValue = data;
          this.isLoading = false;
      }
    })
  }

  goToList(id: number) {
    this.router.navigate([`/activity/list/${id}`]);
  }
}
