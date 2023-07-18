import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'view',
    component: UserViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
