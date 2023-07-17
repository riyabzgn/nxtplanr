import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamUpdateComponent } from './pages/team-update/team-update.component';


@NgModule({
  declarations: [
    TeamDetailsComponent,
    TeamListComponent,
    TeamViewComponent,
    TeamUpdateComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],

})
export class TeamModule { }
