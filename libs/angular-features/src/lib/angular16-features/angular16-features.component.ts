import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, Input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, interval, tap } from 'rxjs';

@Component({
  selector: 'lib-angular16-features',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './angular16-features.component.html',
  styleUrl: './angular16-features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular16FeaturesComponent {
  // required input
  @Input({ required: true }) label?: string;

  // signal declaration
  tick = signal<number>(0);
  tickSquare = computed(() => this.tick() * this.tick());

  tickObs$ = new BehaviorSubject<number>(0);
  tickObsOut$ = this.tickObs$.pipe(tap((x) => console.log('tickObs', x)));

  constructor() {
    // signal effect
    effect(() =>  console.log('tick', this.tick()));

    // takeUntilDestroyed(), comparison signals/observables
    interval(1000).pipe(
      takeUntilDestroyed()
    ).subscribe((x) => {
      this.tickObs$.next(x);
      this.tick.set(x);
    });
  }
}
