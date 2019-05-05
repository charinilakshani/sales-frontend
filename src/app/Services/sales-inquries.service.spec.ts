import { TestBed } from '@angular/core/testing';

import { salesEnquiryService } from './salesEnquiryService';

describe('salesEnquiryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: salesEnquiryService = TestBed.get(salesEnquiryService);
    expect(service).toBeTruthy();
  });
});
