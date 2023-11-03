import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationTypeListComponent } from './vacation-type-list.component';

describe('VacationTypeListComponent', () => {
  let component: VacationTypeListComponent;
  let fixture: ComponentFixture<VacationTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacationTypeListComponent]
    });
    fixture = TestBed.createComponent(VacationTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
