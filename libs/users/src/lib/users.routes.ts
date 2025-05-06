import { Routes } from '@angular/router';
import { UsersComponent } from './_view/users/users.component';
import { provideStore } from '@ngxs/store';
import { SuperheroState } from './_view/_domain';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersComponent,
    providers: [provideStore([SuperheroState])]
  }
]
