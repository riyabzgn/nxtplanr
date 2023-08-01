import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team';
import { TeamService } from '../../team.service';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent {

  teamDetails = this.fb.group({
    id: [''],
    teamName: ['', Validators.required],
    teamDesc: ['', Validators.required]
  });

  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teamservice: TeamService
  ) { }


  addTeam(){
    this.router.navigate(['list']);
    console.log("heloooihn");
    this.isSubmitted = true;
    console.log(this.teamDetails.value);

    if (this.teamDetails.invalid) {
      return;
    }
    
    // this.teamservice.setFormData(this.teamDetails.value);


    const request: any = this.teamDetails.value;
    this.teamservice.addTeam(request).subscribe((data: any) => {
      console.log('res from api', data);
      this.router.navigate(['/team-list']);
    });

    console.log("added");
  }

}

interface apiResponse{
  message:string;
  data:any;
}

