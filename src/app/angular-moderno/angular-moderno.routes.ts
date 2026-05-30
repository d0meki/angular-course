import { Routes } from '@angular/router';

export const routesAngularModerno: Routes = [
  {
    path: 'change-detection',
    loadComponent: () => import('./pages/change-detection/change-detection'),
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./pages/control-flow/control-flow'),
  },
  {
    path: 'defer-options',
    loadComponent: () => import('./pages/defer-options/defer-options'),
  },
  {
    path: 'defer-views',
    loadComponent: () => import('./pages/defer-views/defer-views'),
  },
  {
    path: 'view-transition2',
    loadComponent: () => import('./pages/view-transition/view-transition2'),
  },
  {
    path: 'view-transition1',
    loadComponent: () => import('./pages/view-transition/view-transition1'),
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users'),
  },
  {
    path: 'user/:id',
    loadComponent: () => import('./pages/user/user'),
  },
  {
    path: '',
    redirectTo: 'change-detection',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'change-detection',
    pathMatch: 'full',
  },
];
