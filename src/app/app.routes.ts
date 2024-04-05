import { Routes } from '@angular/router';
import { routeGuard } from './services/permission.service';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((x) => x.HomeComponent),
    },
    {
        path: 'get-permission',
        loadComponent: () =>
          import('./get-permission/get-permission.component').then((x) => x.GetPermissionComponent),
    },
    {
        path: 'protected',
        canActivate: [routeGuard],
        loadComponent: () =>
          import('./protected/protected.component').then((x) => x.ProtectedComponent),
    },
];
