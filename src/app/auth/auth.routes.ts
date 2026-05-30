import { Routes } from '@angular/router';
import { AuthLayout } from '@app/layouts/auth-layout/auth-layout';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page'),
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register-page/register-page'),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

export default authRoutes;
