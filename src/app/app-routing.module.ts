import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './features/layout/layout-container/layout-container.component';
import { isLoggedInGuard } from './guards/isLoggedIn.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: LayoutContainerComponent,
    canActivate: [isLoggedInGuard],
    children: [
      {
        path: 'company',
        loadChildren: () =>
          import('./features/company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'team',
        loadChildren: () =>
          import('./features/teams/team.module').then((m) => m.TeamModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./features/user/user.module').then((m) => m.UserModule),
      },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

