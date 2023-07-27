import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {


  companyFormValue: any[]=[];
  companyList: Company[] = [];

  constructor(private router: Router, private companyservice: CompanyService, public httpClient: HttpClient){
    // this.companyFormValue= this.companyservice.getFormValue();
    // this.companyservice.getCompany().subscribe((data: Company[])=> {
    // this.companyList = data;
    // })
  }

  addCompanyDetails(){
    this.router.navigate(['detail']);
    console.log("redirect to company form pageeee");
  }
  

  deleteCompany(id: number){
    // this.companyFormValue.splice(index, 1);
    this.companyservice.deleteCompany(id).subscribe(()=> {
    });
  }

  updateCompanyList(id: number){
    this.router.navigate([`/company-update/${id}`]);
    console.log('updateCompany() working');
  }

}
