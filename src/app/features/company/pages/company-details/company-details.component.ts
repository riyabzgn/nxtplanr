import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  companyDetails = this.fb.group({
    companyName: ['', Validators.required],
    address: ['', Validators.required],
    companyDesc: ['', Validators.required],
    contact: ['', Validators.required],
    url: ['', Validators.required],
  })

  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  addCompany() {
    this.isSubmitted = true;
    console.log("added");
  }
}
