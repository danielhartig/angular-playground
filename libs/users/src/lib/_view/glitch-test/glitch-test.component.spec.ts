import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchTestComponent } from './glitch-test.component';

describe('GlitchTestComponent', () => {
  let component: GlitchTestComponent;
  let fixture: ComponentFixture<GlitchTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlitchTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlitchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
