import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutContainerComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class LayoutModule { }
