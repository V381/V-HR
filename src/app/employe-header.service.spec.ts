import { TestBed } from '@angular/core/testing';

import { EmployeHeaderService } from './employe-header.service';

describe('EmployeHeaderService', () => {
  let service: EmployeHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
