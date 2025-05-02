import { ChangeDetectionStrategy, Component, effect, model, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'lib-user-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInput,
    MatFormField,
    MatLabel
  ],
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFilterComponent {
  searchterm = model<string>('');
  changedSearchterm = signal('bat');
  debouncedSearchterm = toSignal(
    toObservable(this.changedSearchterm).pipe(debounceTime(500)),
    {initialValue: ''}
  );

  constructor() {
    effect(() => {
      this.searchterm.set(this.debouncedSearchterm());
    }, {allowSignalWrites: true});
  }
}
