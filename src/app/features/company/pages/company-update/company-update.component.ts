import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit{
  id!: any;
  isSubmitted= false;
  company: any;

  
  companyDetails = this.fb.group({
    companyName: ['', Validators.required],
    address: ['', Validators.required],
    companyDesc: ['', Validators.required],
    contact: ['', Validators.required],
    url: ['', Validators.required],
  })
  
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private companyservice: CompanyService) { 
    this.id= this.route.snapshot.paramMap.get('id');
    console.log('check index---> ', this.id);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.company= this.companyservice.getFormValue().find((company: any)=> company.id ===id);
    if(this.company){
      this.companyDetails.patchValue({
        companyName: this.company.companyName,
        address: this.company.address,
        companyDesc: this.company.companyDesc,
        contact: this.company.contact,
        url: this.company.url
      })
    }

    // this.company= this.
  }  

  updateCompany(){
    this.isSubmitted= true;
    if(this.companyDetails.invalid){
      return;
    }

    if(this.company){
      this.company.companyName= this.companyDetails.get('companyName')?.value;
      this.company.address= this.companyDetails.get('address')?.value;
      this.company.companyDesc= this.companyDetails.get('companyDesc')?.value;
      this.company.contact= this.companyDetails.get('contact')?.value;
      this.company.url= this.companyDetails.get('url')?.value;

      this.companyservice.updateCompany(this.company);
    }
    this.router.navigate(['company-list']);
  }
}
