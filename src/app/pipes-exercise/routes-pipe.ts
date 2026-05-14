import { Routes } from '@angular/router';

export const routesPipe: Routes = [
  {
    path: 'basic',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'custom',
    loadComponent: () => import('./pages/custom-page/custom-page'),
  },
  {
    path: 'numbers',
    loadComponent: () => import('./pages/numbers-page/numbers-page'),
  },
  {
    path: 'uncommon',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
];
