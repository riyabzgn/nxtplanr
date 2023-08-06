import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { LayoutModule } from './features/layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamModule } from './features/teams/team.module';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { CompanyModule } from './features/company/company.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    TeamModule,
    CompanyModule,
    RouterModule,
    LayoutModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      
      progressBar: true,
      progressAnimation: 'decreasing',
      toastClass: 'custom-toast',
      titleClass: 'custom-title',
      messageClass: 'custom-message'
    })
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [
    ToastrService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DatePipe
  ],
})
export class AppModule {}
