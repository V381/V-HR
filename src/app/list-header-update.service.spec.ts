import { TestBed } from '@angular/core/testing';

import { ListHeaderUpdateService } from './list-header-update.service';

describe('ListHeaderUpdateService', () => {
  let service: ListHeaderUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListHeaderUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
