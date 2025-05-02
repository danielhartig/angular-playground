import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-angular18-features',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './angular18-features.component.html',
  styleUrl: './angular18-features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular18FeaturesComponent {

  form!: FormGroup;

  constructor() {
    this.form = new FormGroup({
      field1: new FormControl('', [Validators.required]),
      field2: new FormControl('', [Validators.required])
    });

    this.form.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        console.log('with valueChanges: ', value);
      });

    this.form.events
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
      console.log('with events: ', event);
    });
  }
}
