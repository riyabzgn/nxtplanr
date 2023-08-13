import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../company.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss'],
})
export class CompanyUpdateComponent implements OnInit {
  id!: any;
  isSubmitted = false;
  company: any;

  companyDetails = this.fb.group({
    companyName: ['', Validators.required],
    address: ['', Validators.required],
    companyDesc: ['', Validators.required],
    contact: ['', Validators.required],
    url: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private companyservice: CompanyService,
    private location: Location
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.companyservice.getCompanyById(this.id).subscribe(
      (response: any) => {
        this.company = response;
        this.companyDetails.patchValue({
          companyName: this.company.name,
          address: this.company.address,
          companyDesc: this.company.description,
          contact: this.company.contact,
          url: this.company.url,
        });
      },
      (error) => {
        console.error('Error fetching company details:', error);
      }
    );
  }

  updateCompany() {
    this.isSubmitted = true;
    if (this.companyDetails.invalid) {
      return;
    }
  
    const updatedCompanyDetails = {
      id: this.company.id,
      name: this.companyDetails.get('companyName')?.value,
      address: this.companyDetails.get('address')?.value,
      description: this.companyDetails.get('companyDesc')?.value,
      contact: this.companyDetails.get('contact')?.value,
      url: this.companyDetails.get('url')?.value,
    };
  
    this.companyservice.updateCompany(this.company.id, updatedCompanyDetails).subscribe(
      (response: any) => {
        console.log('Company updated successfully:', response); // Log the response here
        this.router.navigate(['/company/list']);
      },
      (error) => {
        console.error('Error updating company:', error);
      }
    );
  }
  
  goBackToPrevPage(): void {
    this.location.back();
  }
}
