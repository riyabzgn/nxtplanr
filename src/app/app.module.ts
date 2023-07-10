import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/pages/login.component';
import { RegisterComponent } from './features/auth/register/pages/register.component';
import { UserListComponent } from './features/user/pages/user-list/user-list.component';
import { UserDetailsComponent } from './features/user/pages/user-details/user-details.component';
import { UserViewComponent } from './features/user/pages/user-view/user-view.component';
import { TeamListComponent } from './features/team/pages/team-list/team-list.component';
import { TeamDetailsComponent } from './features/team/pages/team-details/team-details.component';
import { TeamViewComponent } from './features/team/pages/team-view/team-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserDetailsComponent,
    UserViewComponent,
    TeamListComponent,
    TeamDetailsComponent,
    TeamViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
