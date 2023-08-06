import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';
import { ActivityTeamComponent } from './pages/activity-team/activity-team.component';
import { ActivityUserComponent } from './pages/activity-user/activity-user.component';

const routes: Routes = [
  {
    path: '',
    component:  ActivityTeamComponent
  },
  {
    path: 'list/:id',
    component: ActivityListComponent
  },
  {
    path:'list/:id/user/:id1',
    component: ActivityUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRecordRoutingModule { }