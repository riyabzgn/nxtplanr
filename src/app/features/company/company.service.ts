import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyFormData: any[]=[
    {id:'1', companyName: 'FoneNxt', address: 'Pulchowk, Lalitpur', companyDesc: 'Child company of F1Soft International', contact: '+9779800000000', url: 'www.fonenxt.com'}
  ];

  constructor() { }

  updateCompany(company : any){
    const index= this.companyFormData.findIndex((c:any)=> c.id === company.id);
    if(index!== -1){
      this.companyFormData[index]=company;
    }
  }

  setFormValue(data: any){
    this.companyFormData.push(data);
  }

  getFormValue(): any{
    return this.companyFormData;
  }

}
