import { TestBed } from '@angular/core/testing';

import { PrepserviceService } from './prepservice.service';

describe('PrepserviceService', () => {
  let service: PrepserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
