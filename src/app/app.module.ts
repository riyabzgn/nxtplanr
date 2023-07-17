import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TeamModule } from './features/teams/team.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyModule } from './features/company/company.module';
import { LayoutModule } from './features/layout/layout.module';
import { UserModule } from './features/user/user.module';
<<<<<<< Updated upstream
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


=======
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
<<<<<<< Updated upstream
    ReactiveFormsModule,
    FormsModule,
=======

>>>>>>> Stashed changes
    TeamModule,
    CompanyModule,
    RouterModule,
    LayoutModule,
    UserModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}
