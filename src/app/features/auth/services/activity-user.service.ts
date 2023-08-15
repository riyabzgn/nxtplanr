import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityUserService {
  private apiUrl = 'https://dev-fnxt-planr.f1soft.com.np/api/v1/activity';
  constructor(private http: HttpClient, private api: ApiConfigService) { }

  getUserActivityRecord(
    userId: number,
    taskStartDate: Date,
    taskEndDate: Date,
    pageNo: number,
    pageSize: number,
    
  ): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.apiUrl}/users?pageNo=${pageNo}&pageSize=${pageSize}`, {
    
      "userId": userId,
      "taskStartDate": taskStartDate,
      "taskEndDate": taskEndDate,
      
     
    });
  }

  exportUserDetailsToCsv(

    userId: number,
    taskStartDate: Date,
    taskEndDate: Date,
    pageNo: number,
    pageSize: number
  ): Observable<Blob> { 

    return this.http.post(`${this.apiUrl}/users/csv-download?pageNo=${pageNo}&pageSize=${pageSize}`,
      {
        userId: userId,
 
        taskStartDate: taskStartDate,
        taskEndDate: taskEndDate,
    
      }, { responseType: 'blob' } 
    );
  }

}
