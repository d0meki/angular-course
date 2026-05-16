import { Routes } from '@angular/router';

export const routesMaps: Routes = [
  {
    path: 'fullscreen-map',
    loadComponent: () => import('./pages/fullscreen-map-page/fullscreen-map-page'),
  },
  {
    path: 'houses',
    loadComponent: () => import('./pages/houses-page/houses-page'),
  },
  {
    path: 'markers',
    loadComponent: () => import('./pages/markers-page/markers-page'),
  },
  {
    path: '',
    redirectTo: 'fullscreen-map',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'fullscreen-map',
    pathMatch: 'full',
  },
];
