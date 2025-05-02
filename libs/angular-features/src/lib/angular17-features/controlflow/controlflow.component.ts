import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { TestItem, TestItemUtil } from '../test-item.util';

@Component({
  selector: 'lib-controlflow',
  standalone: true,
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlflowComponent {
  counter = signal<number>(0);
  even = computed(() => this.counter() % 2 === 0);

  items: TestItem[] = TestItemUtil.createTestItems(5);

  constructor() {
    interval(2000)
      .pipe(takeUntilDestroyed())
      .subscribe((x) => {
        this.counter.set(x);
      });
  }
}
