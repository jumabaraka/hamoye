import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '', loadChildren: () => import('@hamoye/flight-angular/ui').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('@hamoye/flight-angular/ui').then(m => m.DashboardModule)
  },
  {
    path: 'login', loadChildren: () => import('@hamoye/flight-angular/ui').then(m => m.LoginModule)
  }
];
