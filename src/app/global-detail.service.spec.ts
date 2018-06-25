import { TestBed, inject } from '@angular/core/testing';

import { GlobalDetailService } from './global-detail.service';

describe('GlobalDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDetailService]
    });
  });

  it('should be created', inject([GlobalDetailService], (service: GlobalDetailService) => {
    expect(service).toBeTruthy();
  }));
});
