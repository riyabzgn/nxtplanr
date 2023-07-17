import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyViewComponent } from './pages/company-view/company-view.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
