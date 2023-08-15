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

    teamName: ['', Validators.required],
    teamDesc: ['', Validators.required],
    companyId: ['', Validators.required],
  });

  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teamservice: TeamService
  ) { }


  addTeam() {

    if (this.teamDetails.invalid)
      return;

    const team = {

      name: this.teamDetails.get('teamName')?.value,
      description: this.teamDetails.get('teamDesc')?.value,
      companyId: this.teamDetails.get('companyId')?.value,
    };

    this.teamservice.addNewTeam(team).subscribe(
      (response) => {
        console.log("Team added:", response);
        this.router.navigate(['/team/list']);
      },
      (error) => {
        console.error("Error adding team:", error);
      }
    );
  }
}

// interface apiResponse{
//   message:string;
//   data:any;
// }
