import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Company } from '../company/pages/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  value(value: any) {
    throw new Error('Method not implemented.');
  }
  getFormValue(): any[] {
    throw new Error('Method not implemented.');
  }

  private companyFormData: any[]=[
    {id:'1', companyName: 'FoneNxt', address: 'Pulchowk, Lalitpur', companyDesc: 'Child company of F1Soft International', contact: '+9779800000000', url: 'www.fonenxt.com'}
  ];

  private companyApiURL="https://e016-110-34-13-219.ngrok-free.app/api/v1/companies/create";

  constructor(public httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  getCompany(): Observable <apiResponse>{
    return this.httpClient.get <apiResponse> (this.companyApiURL + 'companyapi/');
  }

  addCompany(company: Company): Observable <apiResponse> {
    return this.httpClient.post < apiResponse > (this.companyApiURL + 'companyapi/', JSON.stringify(company), this.httpOptions);
  }

  getCompanyByID(id: any): Observable < apiResponse >{
    return this.httpClient.get < apiResponse > (this.companyApiURL + '/companyapi/' + id);
  }

  updateCompany(company: Company): Observable < apiResponse >{
    return this.httpClient.put < apiResponse > (this.companyApiURL + '/companyapi/' + company.id, JSON.stringify(company), this.httpOptions);
  }

  deleteCompany(id: number){
    return this.httpClient.delete < apiResponse > (this.companyApiURL + 'companyapi/' + id , this.httpOptions);
  }

  errorHandler(error:{
    error:{
      messsage:string;
    }; status: any;
    message: any;
  }) {
    let errorMessage= '';
    if (error.error instanceof ErrorEvent){
      errorMessage= error.error.message;
    }
    else{
      errorMessage =`Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // updateCompany(company : any){
  //   const index= this.companyFormData.findIndex((c:any)=> c.id === company.id);
  //   if(index!== -1){
  //     this.companyFormData[index]=company;
  //   }
  // }

  // setFormValue(data: any){
  //   this.companyFormData.push(data);
  // }

  // getFormValue(): any{
  //   return this.companyFormData;
  // }
}
interface apiResponse {
  message: string;
  data: any
}