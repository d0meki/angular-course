import { Routes } from '@angular/router';

export const routesBases: Routes = [
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter').then((m) => m.Counter),
  },
  {
    path: 'hero',
    loadComponent: () => import('./hero/hero').then((m) => m.Hero),
  },
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
];
