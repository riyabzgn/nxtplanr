import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './features/company/pages/company-details/company-details.component';
import { CompanyListComponent } from './features/company/pages/company-list/company-list.component';
import { CompanyUpdateComponent } from './features/company/pages/company-update/company-update.component';
import { CompanyViewComponent } from './features/company/pages/company-view/company-view.component';
import { LayoutContainerComponent } from './features/layout/layout-container/layout-container.component';
import { NavbarComponent } from './features/layout/navbar/navbar.component';
import { TeamDetailsComponent } from './features/teams/pages/team-details/team-details.component';
import { TeamListComponent } from './features/teams/pages/team-list/team-list.component';
import { TeamUpdateComponent } from './features/teams/pages/team-update/team-update.component';
import { TeamViewComponent } from './features/teams/pages/team-view/team-view.component';
import { UserDetailsComponent } from './features/user/pages/user-details/user-details.component';
import { UserListComponent } from './features/user/pages/user-list/user-list.component';
import { UserViewComponent } from './features/user/pages/user-view/user-view.component';

const routes: Routes = [
  // {path: '', component: TeamListComponent},
    {path: '', component: LayoutContainerComponent, children: [
      // { path: '', component:CompanyViewComponent},
      { path: 'company-details', component: CompanyDetailsComponent },
      { path: 'company-list', component: CompanyListComponent },
      { path: 'company-view', component: CompanyViewComponent },
      { path: 'company-update/:id', component: CompanyUpdateComponent},
      { path: 'team-details', component: TeamDetailsComponent },
      { path: 'team-list', component: TeamListComponent },
      { path: 'team-view', component: TeamViewComponent },
      { path: 'team-update/:id', component: TeamUpdateComponent},
      { path: 'user-details', component: UserDetailsComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-view', component: UserViewComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }