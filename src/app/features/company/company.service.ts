import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private baseUrl = 'https://dev-fnxt-planr.f1soft.com.np/api/v1/companies';

  constructor(private http: HttpClient) {}

  getAllCompanies(pageNo: number, pageSize: number): Observable<any> {
    const url = `${this.baseUrl}/?pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  getCompanyById(id: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  updateCompany(id: any, companyDetails: any): Observable<any> {
    const url = `${this.baseUrl}/update`;
    return this.http.put(url, companyDetails);
  }

  addNewCompany(companyDetails: any): Observable<any> {
    const url = `${this.baseUrl}/create`;
    return this.http.post(url, companyDetails);
  }
  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
