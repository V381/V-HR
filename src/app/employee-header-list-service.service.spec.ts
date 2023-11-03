import { TestBed } from '@angular/core/testing';

import { EmployeeHeaderListServiceService } from './employee-header-list-service.service';

describe('EmployeeHeaderListServiceService', () => {
  let service: EmployeeHeaderListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeHeaderListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
