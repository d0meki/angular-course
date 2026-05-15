import { Routes } from '@angular/router';

export const routesReactive: Routes = [
  {
    path: 'basic',
    loadComponent: () => import('./pages/reactive-basic-page/reactive-basic-page'),
  },
  {
    path: 'country',
    loadComponent: () => import('./pages/form-country-page/form-country-page'),
  },
  {
    path: 'dynamic',
    loadComponent: () => import('./pages/reactive-dynamic-page/reactive-dynamic-page'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register-page/register-page'),
  },
  {
    path: 'switches',
    loadComponent: () => import('./pages/reactive-switches-page/reactive-switches-page'),
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
