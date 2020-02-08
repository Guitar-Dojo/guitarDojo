import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberModalComponent } from './staff-member-modal.component';

describe('StaffMemberModalComponent', () => {
  let component: StaffMemberModalComponent;
  let fixture: ComponentFixture<StaffMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
