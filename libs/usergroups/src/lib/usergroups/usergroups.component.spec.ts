import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsergroupsComponent } from './usergroups.component';

describe('UsergroupsComponent', () => {
  let component: UsergroupsComponent;
  let fixture: ComponentFixture<UsergroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsergroupsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsergroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
