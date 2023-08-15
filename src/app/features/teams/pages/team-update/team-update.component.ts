// import { Component } from '@angular/core';
// import { Validators, FormBuilder } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { TeamService } from '../../team.service';
// import { Location } from '@angular/common'
// import { HttpClient } from '@angular/common/http';
// import {Team} from '../team';

// @Component({
//   selector: 'app-team-update',
//   templateUrl: './team-update.component.html',
//   styleUrls: ['./team-update.component.scss']
// })
// export class TeamUpdateComponent {

//   id!: any;
//   isSubmitted= false;
//   team: any;
//   // location: any;

  
//   teamDetails = this.fb.group({
//     id: ['', Validators.required],
//     teamName: ['', Validators.required],
//     teamDesc: ['', Validators.required],
//   })
//   teamForm: any;
  
//   constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private teamservice: TeamService, private location: Location,public http: HttpClient) { 
//     this.id= this.route.snapshot.paramMap.get('id');
//     console.log('check index---> ', this.id);
//   }

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     // this.team= this.teamservice.getFormValue().find((team: any)=> team.id ===id);
//     this.teamservice.updateTeam(this.teamForm.value).subscribe((data:apiResponse) =>{
//       this.router.navigate(['/team/list']);
//     });
//     if(this.team){
//       this.teamDetails.patchValue({
//         id: this.team.id,
//         teamName: this.team.teamName,
//         teamDesc: this.team.teamDesc,
//       })
//     }
//   }  

//   updateTeam(){
//     this.isSubmitted= true;
//     if(this.teamDetails.invalid){
//       return;
//     }

//     if(this.team){
//       this.team.id= this.teamDetails.get('id')?.value;
//       this.team.teamName= this.teamDetails.get('teamName')?.value;
//       this.team.teamDesc= this.teamDetails.get('teamDesc')?.value;

//       this.teamservice.updateTeam(this.team);
//     }
//     this.router.navigate(['/team/list']);
//   }

//   goBackToTeamList(){
//     this.location.back();
//   }
// }

// interface apiResponse{
//   message:string;
//   data:any;
// }

