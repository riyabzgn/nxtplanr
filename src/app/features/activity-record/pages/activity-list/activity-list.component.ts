import { Component } from '@angular/core';
import { faUser, faBackward,faFileExport,faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent {
  faUser = faUser;
  faBackward = faBackward;
  faFileExport = faFileExport;
  faEye = faEye;
}
