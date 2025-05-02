import { inject, Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { tap } from 'rxjs';
import { SuperheroHttpService } from './superhero-http.service';
import { SuperheroStateModel } from './superhero-state.model';
import { ChangeSearchterm, Select } from './superhero.action';

const SUPERHERO_STATE_TOKEN = new StateToken<SuperheroStateModel>('superheroes');

@State<SuperheroStateModel>({
  name: SUPERHERO_STATE_TOKEN,
  defaults: {
    searchterm: 'batman',
    items: [],
    selected: undefined
  }
})
@Injectable()
export class SuperheroState implements NgxsOnInit {
  httpService = inject(SuperheroHttpService);

  @Selector()
  static model(state: SuperheroStateModel) {
    return state;
  }

  ngxsOnInit(ctx: StateContext<SuperheroStateModel>) {
    ctx.dispatch(new ChangeSearchterm(ctx.getState().searchterm));
  }

  @Action(ChangeSearchterm, {cancelUncompleted: true})
  changeSearchterm(ctx: StateContext<SuperheroStateModel>, action: ChangeSearchterm) {
    const searchterm = action.name;
    ctx.patchState({ searchterm });
    return this.httpService.getSearchResult(searchterm).pipe(
      tap((items) => ctx.patchState({ items }))
    );
  }

  @Action(Select)
  select(ctx: StateContext<SuperheroStateModel>, action: Select) {
    const selected = action.id;
    ctx.patchState({ selected });
  }
}