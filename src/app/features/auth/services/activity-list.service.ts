import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityListService {
  private apiUrl = 'https://dev-fnxt-planr.f1soft.com.np/api/v1/activity';
  constructor(private http: HttpClient, private api: ApiConfigService) { }

  getUserWorkingHoursPerDay(
    userId: number,
    startDate: Date,
    endDate: Date
  ): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.apiUrl}/user/working-hours/per-day`, {
    
      "userId": userId,
      "startDate": startDate,
      "endDate": endDate
      
    });
  }
  exportListDataToCsv(
    teamId: number | undefined,
    userId: number,
    startDate: Date,
    endDate: Date
  ): Observable<Blob> { 

   

    return this.http.post(`${this.apiUrl}/user/working-hours/per-day/csv-download`,
      {
        teamId:teamId,
        userId: userId,
        startDate: startDate,
        endDate: endDate,
      }, { responseType: 'blob' } 
    );
  }

}
