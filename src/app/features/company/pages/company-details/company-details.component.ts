import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../company.service';
import { faSquarePlus }  from '@fortawesome/free-solid-svg-icons';
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
  faSquarePlus =  faSquarePlus;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private companyservice: CompanyService, public httpClient: HttpClient) { }

  addCompany() {
    if (this.companyDetails.invalid) return;
  
    const company = {
      name: this.companyDetails.get('companyName')?.value,
      address: this.companyDetails.get('address')?.value,
      description: this.companyDetails.get('companyDesc')?.value,
      contact: this.companyDetails.get('contact')?.value,
      url: this.companyDetails.get('url')?.value,
    };
  
    this.companyservice.addNewCompany(company).subscribe(
      (response) => {
        console.log("Company added:", response);
        this.router.navigate(['/company/list']);
      },
      (error) => {
        console.error("Error adding company:", error);
      }
    );
  }
  
  
}
