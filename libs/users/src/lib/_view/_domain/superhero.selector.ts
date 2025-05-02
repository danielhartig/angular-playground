import { computed, Injectable } from '@angular/core';
import { select } from '@ngxs/store';
import { SuperheroState } from './superhero.state';

@Injectable({providedIn: 'root'})
export class SuperheroSelector {
  #model = select(SuperheroState.model);
  searchterm = computed(() => this.#model().searchterm);
  heroes = computed(() => this.#model().items);
  heroCount = computed(() => this.heroes().length);
  selectedId = computed(() => this.#model().selected);
  selectedHero = computed(() => this.heroes().find((hero) => hero.id === this.selectedId()));
}
