import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-user-input',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInputComponent {

}
