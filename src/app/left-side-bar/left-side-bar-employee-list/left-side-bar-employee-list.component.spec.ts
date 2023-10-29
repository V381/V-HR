import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBarEmployeeListComponent } from './left-side-bar-employee-list.component';

describe('LeftSideBarEmployeeListComponent', () => {
  let component: LeftSideBarEmployeeListComponent;
  let fixture: ComponentFixture<LeftSideBarEmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideBarEmployeeListComponent]
    });
    fixture = TestBed.createComponent(LeftSideBarEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
