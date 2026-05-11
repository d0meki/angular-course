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
    path: 'dbzv1',
    loadComponent: () => import('./dragonball/dragonball').then((m) => m.Dragonball),
  },
  {
    path: 'dbzv2',
    loadComponent: () =>
      import('./dragonball-super-page/dragonball-super-page').then((m) => m.DragonballSuperPage),
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
