import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyViewComponent } from './pages/company-view/company-view.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
<<<<<<< Updated upstream
import { CompanyUpdateComponent } from './pages/company-update/company-update.component';
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  {
    path: 'update',
    component: CompanyUpdateComponent
  },
=======
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
