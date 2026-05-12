import { Routes } from '@angular/router';

export const routesGifs: Routes = [
  {
    path: 'lista-gifs',
    loadComponent: () => import('./pages/list-gifs.page/list-gifs-page'),
  },
  {
    path: 'search-gifs',
    loadComponent: () => import('./pages/search-gifs-page/search-gifs-page'),
  },
  {
    path: 'history/:query',
    loadComponent: () => import('./pages/gif-history/gif-history'),
  },
  {
    path: '',
    redirectTo: 'lista-gifs',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'lista-gifs',
    pathMatch: 'full',
  },
];
