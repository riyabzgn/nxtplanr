import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityTeamService {
  private apiUrl = 'https://dev-fnxt-planr.f1soft.com.np/api/v1/activity';

  constructor(private http: HttpClient, private api: ApiConfigService) {}

  getTeamUserData(
    teamId: any,
    startDate: Date,
    endDate: Date,
    pageNo: number,
    pageSize: number
  ): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      `${this.apiUrl}/team/total-hours?pageNo=${pageNo}&pageSize=${pageSize}`,

      {
        teamId: teamId,
        startDate: startDate,
        endDate: endDate,
      }
    );
  }

  exportUserDataToCsv(
    teamId: any,
    startDate: Date,
    endDate: Date,
    pageNo: number,
    pageSize: number
  ): Observable<Blob> { 

    return this.http.post(`${this.apiUrl}/team/total-hours/csv-download?pageNo=${pageNo}&pageSize=${pageSize}`,
      {
        teamId: teamId,
        startDate: startDate,
        endDate: endDate,
        pageNo:pageNo,
        pageSize:pageSize


      }, { responseType: 'blob' } 
    );
  }

  private selectedName: string = '';

  setSelectedName(firstName: string, lastName: string) {
    this.selectedName = `${firstName} ${lastName}`;
  }

  getSelectedName(): string {
    return this.selectedName;
  }
}
