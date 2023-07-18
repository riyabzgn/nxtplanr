import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {


  companyFormValue: any[]=[];

  constructor(private router: Router, private companyservice: CompanyService){
    this.companyFormValue= this.companyservice.getFormValue();
  }

  addCompanyDetails(){
    this.router.navigate(['/company-details']);
    console.log("redirect to company form pageeee");
  }
  

  deleteCompany(index: number){
    this.companyFormValue.splice(index, 1);
  }

  updateCompany(id: number){
    this.router.navigate([`/company-update/${id}`]);
    console.log('updateCompany() working');
  }

}
