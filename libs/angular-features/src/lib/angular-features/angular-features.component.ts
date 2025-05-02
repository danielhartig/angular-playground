import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular17FeaturesComponent } from '../angular17-features/angular17-features.component';
import { Angular16FeaturesComponent } from '../angular16-features/angular16-features.component';
import { Angular18FeaturesComponent } from '../angular18-features/angular18-features.component';

@Component({
  selector: 'lib-angular-features',
  standalone: true,
  imports: [CommonModule, Angular16FeaturesComponent, Angular17FeaturesComponent, Angular18FeaturesComponent],
  templateUrl: './angular-features.component.html',
  styleUrl: './angular-features.component.css',
})
export class AngularFeaturesComponent {
  // input from router data
  @Input() myparam?: number;
}
