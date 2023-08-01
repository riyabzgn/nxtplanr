import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Team} from '../team';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent {

  constructor(public http: HttpClient) {}
}
