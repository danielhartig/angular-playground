import { Superhero } from './model/superhero.model';

export interface SuperheroStateModel {
  searchterm: string;
  items: Superhero[];
  selected: string | undefined;
}
