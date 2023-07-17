import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityUserComponent } from './activity-user.component';

describe('ActivityUserComponent', () => {
  let component: ActivityUserComponent;
  let fixture: ComponentFixture<ActivityUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityUserComponent]
    });
    fixture = TestBed.createComponent(ActivityUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
