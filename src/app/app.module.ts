import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { TeamModule } from './features/teams/team.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyModule } from './features/company/company.module';
import { LayoutModule } from './features/layout/layout.module';
import { UserModule } from './features/user/user.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    UserModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}
