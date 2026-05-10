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
    ],
  },
];
