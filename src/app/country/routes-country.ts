import { Routes } from '@angular/router';

export const routesCountry: Routes = [
  {
    path: 'capital',
    loadComponent: () => import('./pages/by-capital-page/by-capital-page'),
  },
  {
    path: 'pais',
    loadComponent: () => import('./pages/by-country-page/by-country-page'),
  },
  {
    path: 'region',
    loadComponent: () => import('./pages/by-region-page/by-region-page'),
  },
  {
    path: 'by/:code',
    loadComponent: () => import('./pages/country-page/country-page'),
  },
  {
    path: '',
    redirectTo: 'capital',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'capital',
    pathMatch: 'full',
  },
];
