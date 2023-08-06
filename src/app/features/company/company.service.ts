import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private companyFormData: any[] = [
    {
      id: '1',
      companyName: 'FoneNxt',
      address: 'Pulchowk, Lalitpur',
      companyDesc: 'Child company of F1Soft International',
      contact: '+9779800000000',
      url: 'www.fonenxt.com',
    },
  ];

  constructor() {}

  updateCompany(company: any) {
    const index = this.companyFormData.findIndex(
      (c: any) => c.id === company.id
    );
    if (index !== -1) {
      this.companyFormData[index] = company;
    }
  }

  setFormValue(data: any) {
    this.companyFormData.push(data);
  }

  getFormValue(): any {
    return this.companyFormData;
  }
}

// import { Observable } from 'rxjs';


// export class CompanyService {
//   private apiUrl = 'https://your-api-url'; // Replace this with your API endpoint

//   constructor(private http: HttpClient) { }

//   // CRUD operations using HttpClient


//   createCompany(company: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + '/companies', company);
//   }

//   getCompanies(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl + '/companies');
//   }


//   getCompanyById(id: string): Observable<any> {
//     return this.http.get<any>(this.apiUrl + `/companies/${id}`);
//   }


//   updateCompany(company: any): Observable<any> {
//     return this.http.put<any>(this.apiUrl + `/companies/${company.id}`, company);
//   }


//   deleteCompany(id: string): Observable<any> {
//     return this.http.delete<any>(this.apiUrl + `/companies/${id}`);
//   }
// }
