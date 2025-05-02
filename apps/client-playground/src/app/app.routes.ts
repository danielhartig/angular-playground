import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'angular',
    resolve: {myparam: () => 42},
    loadChildren: () => import('@hartig/angular-features').then((m) => m.ANGULAR_FEATURES_ROUTES)
  },
  {
    path: 'angular2',
    resolve: {myparam: () => 84},
    loadChildren: () => import('@hartig/angular-features').then((m) => m.ANGULAR_FEATURES_ROUTES)
  },
  {
    path: 'users',
    resolve: {myparam: () => 42},
    loadChildren: () => import('@hartig/users').then((m) => m.USERS_ROUTES)
  },
  {
    path: 'users2',
    resolve: {myparam: () => 84},
    loadChildren: () => import('@hartig/users').then((m) => m.USERS_ROUTES)
  },
  {
    path: 'usergroups',
    loadChildren: () => import('@hartig/usergroups').then((m) => m.USERGROUPS_ROUTES)
  },
];
