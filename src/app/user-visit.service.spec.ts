import { TestBed } from '@angular/core/testing';

import { UserVisitService } from './user-visit.service';

describe('UserVisitService', () => {
  let service: UserVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
