import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyUpdateComponent } from './pages/company-update/company-update.component';

@NgModule({
  declarations: [
    CompanyListComponent,

    CompanyDetailsComponent,
    CompanyUpdateComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyRoutingModule,
    FontAwesomeModule,

  ],
})
export class CompanyModule {}
