import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const routesDashboard: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: 'bases',
        loadChildren: () => import('../bases/routes-bases').then((m) => m.routesBases),
      },
      {
        path: 'gifs',
        loadChildren: () => import('../gifs/routes-gif').then((m) => m.routesGifs),
      },
      {
        path: 'countries',
        loadChildren: () => import('../country/routes-country').then((m) => m.routesCountry),
      },
      {
        path: 'pipes',
        loadChildren: () => import('../pipes-exercise/routes-pipe').then((m) => m.routesPipe),
      },
      {
        path: 'reactive',
        loadChildren: () =>
          import('../reactive-form/routes-reactive').then((m) => m.routesReactive),
      },
      {
        path: 'lifecycle',
        loadChildren: () => import('../lifecycle/routes-life').then((m) => m.routesLifeCylce),
      },
      {
        path: 'maps',
        loadChildren: () => import('../maps/routes-map').then((m) => m.routesMaps),
      },
    ],
  },
];
