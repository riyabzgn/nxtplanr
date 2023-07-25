import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../company.service';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  companyDetails = this.fb.group({
    id: ['', Validators.required],
    companyName: ['', Validators.required],
    address: ['', Validators.required],
    companyDesc: ['', Validators.required],
    contact: ['', Validators.required],
    url: ['', Validators.required],
  })

  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private companyservice: CompanyService) { }

  addCompany() {
    const formCompanyData: any[]= [];

    if(this.companyDetails.invalid) return;


    const company={
      id: this.companyDetails.get('id')?.value,
      companyName: this.companyDetails.get('companyName')?.value,
      address: this.companyDetails.get('address')?.value,
      companyDesc: this.companyDetails.get('companyDesc')?.value,
      contact: this.companyDetails.get('contact')?.value,
    };

    if (this.companyDetails.valid) {
      this.isSubmitted = true;
      this.companyservice.setFormValue(company);
      this.router.navigate(['/company/list']);
      console.log("added");
    } 

  }
  
}
