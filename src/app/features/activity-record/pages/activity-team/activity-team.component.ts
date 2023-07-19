import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activity-team',
  templateUrl: './activity-team.component.html',
  styleUrls: ['./activity-team.component.scss']
})
export class ActivityTeamComponent {
  formValue: any[] = [
    { name: 'Sanil Manandhar', workinghours: 40 },
    { name: 'Riya Bazgain', workinghours:40},
    {name:'Pritha Shrestha', workinghours:40}
    
  ];

  constructor(private router: Router) { }

  goToList(){
    this.router.navigate(['/activity/list']);
  }
}
