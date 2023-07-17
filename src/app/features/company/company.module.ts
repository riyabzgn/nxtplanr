import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyViewComponent } from './pages/company-view/company-view.component';
import { CompanyUpdateComponent } from './pages/company-update/company-update.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyViewComponent,
    CompanyDetailsComponent,
    CompanyUpdateComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
  
