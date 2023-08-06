import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRecordRoutingModule } from './activity-record-routing.module';
import { ActivityTeamComponent } from './pages/activity-team/activity-team.component';
import { ActivityUserComponent } from './pages/activity-user/activity-user.component';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    ActivityTeamComponent,
    ActivityUserComponent,
    ActivityListComponent,
  ],
  imports: [
    CommonModule,
    ActivityRecordRoutingModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  
  ],
})
export class ActivityRecordModule {}
