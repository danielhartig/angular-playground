import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Superhero } from '../_domain/model/superhero.model';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  items = input.required<Superhero[]>();
  selected = model<Superhero>();

  displayedColumns: string[] = ['id', 'name', 'full-name', 'alignment'];
}
