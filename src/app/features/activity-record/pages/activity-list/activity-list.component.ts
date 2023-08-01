import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }
  
  goToUser(){
    this.router.navigate(['/activity/list/user']);
  }
}

