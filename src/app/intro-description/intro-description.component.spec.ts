import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDescriptionComponent } from './intro-description.component';

describe('IntroDescriptionComponent', () => {
  let component: IntroDescriptionComponent;
  let fixture: ComponentFixture<IntroDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroDescriptionComponent]
    });
    fixture = TestBed.createComponent(IntroDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
