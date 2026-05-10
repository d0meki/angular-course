import { Routes } from '@angular/router';
import { routesDashboard } from './layouts/routes-dashboard';

export const routes: Routes = [
  {
    path: 'dashboard',
    children: routesDashboard,
    // loadComponent: () => import('./layouts/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
