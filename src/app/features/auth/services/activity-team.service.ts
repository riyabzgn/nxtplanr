import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityTeamService {
  private apiUrl = 'https://e6cb-110-44-114-34.ngrok-free.app/api/v1/activity';

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
  private selectedName: string = '';

  setSelectedName(firstName: string, lastName: string ) {
    this.selectedName = `${firstName} ${lastName}`;
  }

  getSelectedName(): string {
    return this.selectedName;
  }
}
