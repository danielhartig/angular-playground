import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Superhero } from '../_domain/model/superhero.model';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {
  hero = input<Superhero | undefined>(undefined);
}
