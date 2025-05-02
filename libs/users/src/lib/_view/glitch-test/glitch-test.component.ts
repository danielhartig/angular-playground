import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { BehaviorSubject, combineLatest, tap } from 'rxjs';

@Component({
  selector: 'lib-glitch-test',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './glitch-test.component.html',
  styleUrl: './glitch-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlitchTestComponent {
  glitch1 = signal(10);
  glitch2 = signal(20);
  glitch1$ = new BehaviorSubject(10);
  glitch2$ = new BehaviorSubject(20);

  constructor() {
    effect(() => {
      console.log(`glitch-free: ${this.glitch1()}, ${this.glitch2()}`);
    });
    combineLatest([this.glitch1$, this.glitch2$]).pipe(
      tap(([glitch1, glitch2]) => console.log(`not so glitch-free: ${glitch1}, ${glitch2}`)),
      takeUntilDestroyed()
    ).subscribe();
  }

  glitchSignal() {
    this.glitch1.update(curr => curr + 1);
    this.glitch2.update(curr => curr + 1);
  }

  glitchObservable() {
    this.glitch1$.next(this.glitch1$.value + 1);
    this.glitch2$.next(this.glitch2$.value + 1);
  }
}
