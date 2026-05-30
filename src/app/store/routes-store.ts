import { Routes } from '@angular/router';

export const routesStore: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/store-home-page/store-home-page'),
  },
  {
    path: 'gender/:gender',
    loadComponent: () => import('./pages/gender-page/gender-page'),
  },
  {
    path: 'product/:idSlug',
    loadComponent: () => import('./pages/product-page/product-page'),
  },
  {
    path: 'products-list',
    loadComponent: () => import('./pages/productos-page/productos-page'),
  },
  {
    path: 'products-list',
    loadComponent: () => import('./pages/productos-page/productos-page'),
  },
  {
    path: 'producto/:id',
    loadComponent: () => import('./pages/producto-page/producto-page'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found-page/not-found-page'),
  },
];
