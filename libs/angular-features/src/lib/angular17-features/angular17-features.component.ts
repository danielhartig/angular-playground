import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { Angular16FeaturesComponent } from '../angular16-features/angular16-features.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { DeferrableViewsComponent } from './deferrable-views/deferrable-views.component';


@Component({
  selector: 'lib-angular17-features',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    ControlflowComponent,
    DeferrableViewsComponent,
    Angular16FeaturesComponent
  ],
  templateUrl: './angular17-features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular17FeaturesComponent {

}
