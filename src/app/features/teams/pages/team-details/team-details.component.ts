import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent {

  teamDetails = this.fb.group({
    teamName: ['', Validators.required],

    teamDesc: ['', Validators.required]

  })

  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  addTeam() {
    if (this.teamDetails.valid) {
      this.isSubmitted = true;
      this.router.navigate(['/team-list']);
      
    } else {
      this.teamDetails.markAllAsTouched();
    }
  }
  }
