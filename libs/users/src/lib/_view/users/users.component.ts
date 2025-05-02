import { CommonModule } from '@angular/common';
import { Component, computed, inject, viewChild } from '@angular/core';
import { dispatch } from '@ngxs/store';
import { SuperheroSelector } from '../_domain';
import * as SuperheroActions from '../_domain/superhero.action';
import { GlitchTestComponent } from '../glitch-test/glitch-test.component';
import { UserCountComponent } from '../user-count/user-count.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserFilterComponent } from '../user-filter/user-filter.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, UserFilterComponent, UserListComponent, UserDetailComponent, UserCountComponent, GlitchTestComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  selectors = inject(SuperheroSelector);

  select = dispatch(SuperheroActions.Select);
  changeSearchterm = dispatch(SuperheroActions.ChangeSearchterm);

  userCountRef = viewChild(UserCountComponent);

  limitedHeroes = computed(() => {
    const heroesToShow = this.userCountRef()?.counter();
    const heroes = this.selectors.heroes();

    return heroesToShow && heroes.length > heroesToShow
      ? heroes.filter((value, index) => index < heroesToShow)
      : heroes;
  });

}
