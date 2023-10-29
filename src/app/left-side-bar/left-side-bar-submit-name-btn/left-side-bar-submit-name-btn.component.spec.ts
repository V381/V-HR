import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBarSubmitNameBtnComponent } from './left-side-bar-submit-name-btn.component';

describe('LeftSideBarSubmitNameBtnComponent', () => {
  let component: LeftSideBarSubmitNameBtnComponent;
  let fixture: ComponentFixture<LeftSideBarSubmitNameBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideBarSubmitNameBtnComponent]
    });
    fixture = TestBed.createComponent(LeftSideBarSubmitNameBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
