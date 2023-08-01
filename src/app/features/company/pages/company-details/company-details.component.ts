import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../company.service';
import { Company } from '../company';
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

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private companyservice: CompanyService, public httpClient: HttpClient) { }

  addCompany() {
    if (this.companyDetails.invalid) return;

    const company = {
      id: this.companyDetails.get('id')?.value,
      companyName: this.companyDetails.get('companyName')?.value,
      address: this.companyDetails.get('address')?.value,
      companyDesc: this.companyDetails.get('companyDesc')?.value,
      contact: this.companyDetails.get('contact')?.value,
    };

    if (this.companyDetails.valid) {
      this.isSubmitted = true;
      // this.companyservice.setFormValue(company);
      console.log(this.companyDetails.value);
      const request = this.companyDetails.value;
      this.companyservice.addCompany(request).subscribe((data) => {
        console.log("companyDetails value: ", this.companyDetails.value);
        this.router.navigate(['list']);
      })

    }


  }
  getCompany1() {
    this.companyservice.getCompany().subscribe({
      next: (res) => {
        console.log('res', res);
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }
}
