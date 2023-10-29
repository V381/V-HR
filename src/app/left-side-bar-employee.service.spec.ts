import { TestBed } from '@angular/core/testing';

import { LeftSideBarEmployeeService } from './left-side-bar-employee.service';

describe('LeftSideBarEmployeeService', () => {
  let service: LeftSideBarEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftSideBarEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
