import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faUser,
  faBackward,
  faFileExport,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { ActivityTeamService } from 'src/app/features/auth/services/activity-team.service';
interface User {
  id: number;
  name: string;
  // other properties...
}
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityTeamService: ActivityTeamService,
    private router: Router
  ) {
    const id = this.activatedRoute.snapshot.params['id'];

    this.activityTeamService.getUserById(id).subscribe({
      next: (user) => {
        this.selectedName = user.name;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit() {}
}
