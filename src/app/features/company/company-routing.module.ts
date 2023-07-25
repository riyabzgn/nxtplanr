import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyViewComponent } from './pages/company-view/company-view.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompanyUpdateComponent } from './pages/company-update/company-update.component';

const routes: Routes = [
  {path: '',  redirectTo:'list', pathMatch:'full'},
  {
    path: 'view/:id',
    component: CompanyViewComponent
  },
  {
    path: 'list',
    component: CompanyListComponent
  },
  {
    path: 'detail',
    component: CompanyDetailsComponent
  },
  {
    path: 'update/:id',
    component: CompanyUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
