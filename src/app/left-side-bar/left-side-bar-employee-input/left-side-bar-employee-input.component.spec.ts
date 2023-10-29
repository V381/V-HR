import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBarEmployeeInputComponent } from './left-side-bar-employee-input.component';

describe('LeftSideBarEmployeeInputComponent', () => {
  let component: LeftSideBarEmployeeInputComponent;
  let fixture: ComponentFixture<LeftSideBarEmployeeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideBarEmployeeInputComponent]
    });
    fixture = TestBed.createComponent(LeftSideBarEmployeeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
