import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular17FeaturesComponent } from './angular17-features.component';

describe('Angular17FeaturesComponent', () => {
  let component: Angular17FeaturesComponent;
  let fixture: ComponentFixture<Angular17FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular17FeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular17FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
