import { TestBed } from '@angular/core/testing';

import { EmployeeListServiceService } from './employee-list-service.service';

describe('EmployeeListServiceService', () => {
  let service: EmployeeListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
