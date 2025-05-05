import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-deferrable-views',
  standalone: true,
  imports: [],
  templateUrl: './deferrable-views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferrableViewsComponent {

}
