import { Routes } from '@angular/router';
import { routesDashboard } from './layouts/routes-dashboard';
import authRoutes from './auth/auth.routes';
import { NotAuthenticatedGuard } from './auth/guards/not-authenticated.guard';
import { IsAuthenticatedGuard } from './auth/guards/is-authenticate.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    children: routesDashboard,
    canMatch: [IsAuthenticatedGuard],
    // loadComponent: () => import('./layouts/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'auth',
    children: authRoutes,
    canMatch: [NotAuthenticatedGuard],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
