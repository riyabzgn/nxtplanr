import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  constructor(private router: Router){}

  addCompanyDetails(){
    this.router.navigate(['/company-details']);
    console.log("redirect to company form pageeee");
  }
}
