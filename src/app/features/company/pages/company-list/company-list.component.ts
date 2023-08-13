import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../company.service';
import {
  faPenToSquare,
  faTrash,
  faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  
  hasData: boolean = false;
  pageNo: number = 0;
  pageSize: number = 3;
  totalElements: number = 6;
  companyFormValue: any[] = [];
  isLoading: boolean = false;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faSquarePlus = faSquarePlus;

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    this.loadCompanies();
  }
  loadCompanies() {
    const startIndex = this.pageNo * this.pageSize;

    this.isLoading = true;
    this.companyService.getAllCompanies(startIndex, this.pageSize).subscribe(
      (response: any) => {
        this.companyFormValue = response.content;
        this.totalElements = response.totalElements;
        this.hasData = this.companyFormValue.length > 0;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching companies:', error);
        this.isLoading = false;
      }
    );
  }
  
  updateCompany(id: number) {
    this.router.navigate([`/company/update/${id}`]);
  }

  deleteCompany(id: number) {
    if (confirm('Are you sure you want to delete this company?')) {
      this.isLoading = true;
      this.companyService.deleteCompany(id).subscribe({
        next: (response: any) => {
          console.log('Company deleted:', response);
          this.loadCompanies();
        },
        error: (error) => {
          console.error('Error deleting company:', error);
          this.isLoading = false;
        },
      });
    }
  }

  openCompanyDetails() {
    this.router.navigate(['/company/detail']);
  }
  
  goToPreviousPage() {
    if (this.pageNo > 0) {
      this.pageNo--;
      this.loadCompanies();
    }
  }

  goToNextPage() {
    if (this.pageNo < Math.ceil(this.totalElements / this.pageSize) - 1) {
      this.pageNo++;
      this.loadCompanies();
    }
  }
}
