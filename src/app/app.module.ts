import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/pages/login.component';
import { RegisterComponent } from './features/auth/register/pages/register.component';
import { UserListComponent } from './features/user/pages/user-list/user-list.component';
import { UserDetailsComponent } from './features/user/pages/user-details/user-details.component';
import { UserViewComponent } from './features/user/pages/user-view/user-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamModule } from './features/teams/team.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './features/layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserDetailsComponent,
    UserViewComponent,

    ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TeamModule,
    RouterModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
