import { Component } from '@angular/core';
import {faEye} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nxtplann';
  faEye =faEye;
}
