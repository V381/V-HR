import { TestBed } from '@angular/core/testing';

import { EmployeFormService } from './employe-form.service';

describe('EmployeFormService', () => {
  let service: EmployeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
