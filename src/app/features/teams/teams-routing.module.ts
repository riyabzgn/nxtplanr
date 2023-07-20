import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { TeamUpdateComponent } from './pages/team-update/team-update.component';

const routes: Routes = [
  {path: '', redirectTo:'list', pathMatch:'full'},
  {
    path: 'list',
    component: TeamListComponent,

  },
  {
    path: 'view/:id',
    component: TeamViewComponent
  },
 
  {
    path: 'details',
    component: TeamDetailsComponent
  },
  {
    path: 'update/:id',
    component: TeamUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
