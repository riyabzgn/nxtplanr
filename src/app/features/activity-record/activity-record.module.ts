import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRecordRoutingModule } from './activity-record-routing.module';
import { ActivityTeamComponent } from './pages/activity-team/activity-team.component';
import { ActivityUserComponent } from './pages/activity-user/activity-user.component';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';


@NgModule({
  declarations: [
    ActivityTeamComponent,
    ActivityUserComponent,
    ActivityListComponent
  ],
  imports: [
    CommonModule,
    ActivityRecordRoutingModule
  ]
})
export class ActivityRecordModule { }
