import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-user-count',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './user-count.component.html',
  styleUrl: './user-count.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCountComponent {
  max = input.required<number>();

  counter = signal(0);

  constructor() {
    effect(() => {
      const max = this.max();
      this.counter.set(max);
    }, {allowSignalWrites: true});
  }

  up() {
    if (this.counter() < this.max()) {
      this.counter.update(c => c + 1);
    }
  }

  down() {
    if (this.counter() > 0) {
      this.counter.update(c => c - 1);
    }
  }
}
