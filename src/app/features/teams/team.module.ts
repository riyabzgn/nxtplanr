import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeamDetailsComponent,
    TeamListComponent,
    TeamViewComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TeamDetailsComponent,
    TeamListComponent,
    TeamViewComponent
  ]
})
export class TeamModule { }
