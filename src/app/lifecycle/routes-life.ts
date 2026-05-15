import { Routes } from '@angular/router';

export const routesLifeCylce: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/life-home-page/life-home-page'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/abaout-page/abaout-page'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
];
