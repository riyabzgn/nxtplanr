import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: TeamViewComponent
  },
  {
    path: 'list',
    component: TeamListComponent
  },
  {
    path: 'details/:id',
    component: TeamDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
