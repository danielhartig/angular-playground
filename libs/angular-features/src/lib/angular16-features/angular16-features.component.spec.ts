import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular16FeaturesComponent } from './angular16-features.component';

describe('Angular16FeaturesComponent', () => {
  let component: Angular16FeaturesComponent;
  let fixture: ComponentFixture<Angular16FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular16FeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular16FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
