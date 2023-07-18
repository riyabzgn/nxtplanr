import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTeamComponent } from './activity-team.component';

describe('ActivityTeamComponent', () => {
  let component: ActivityTeamComponent;
  let fixture: ComponentFixture<ActivityTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityTeamComponent]
    });
    fixture = TestBed.createComponent(ActivityTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
