import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './features/company/pages/company-details/company-details.component';
import { CompanyListComponent } from './features/company/pages/company-list/company-list.component';
import { CompanyViewComponent } from './features/company/pages/company-view/company-view.component';
import { TeamDetailsComponent } from './features/team/pages/team-details/team-details.component';
import { TeamListComponent } from './features/team/pages/team-list/team-list.component';
import { TeamViewComponent } from './features/team/pages/team-view/team-view.component';
import { UserDetailsComponent } from './features/user/pages/user-details/user-details.component';
import { UserListComponent } from './features/user/pages/user-list/user-list.component';
import { UserViewComponent } from './features/user/pages/user-view/user-view.component';

const routes: Routes = [
  { path:'companydetails', component: CompanyDetailsComponent},
  { path:'companylist', component: CompanyListComponent},
  { path:'companyview', component: CompanyViewComponent},
  { path:'teamdetails', component: TeamDetailsComponent},
  { path:'teamlist', component: TeamListComponent},
  { path:'teamview', component: TeamViewComponent},
  { path:'userdetails', component: UserDetailsComponent},
  { path:'userlist', component: UserListComponent},
  { path:'userview', component: UserViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
