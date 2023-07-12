import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent {
  
  teamDetails= this.fb.group ({
    teamName: ['', [Validators.required]],
    teamDesc: ['', [Validators.required]],
    teamActive: ['', [Validators.required]],
    teamCreatedDate: ['', [Validators.required]],
    teamUpdatedDate: ['', [Validators.required]]

  })

  constructor(private fb:FormBuilder, private router: Router, private route: ActivatedRoute){}

  addTeam(){
    this.router.navigate(['/team-list']);
    console.log("heloooihn");
  }
}