import { TestBed } from '@angular/core/testing';

import { SalesInquriesService } from './sales-inquries.service';

describe('SalesInquriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesInquriesService = TestBed.get(SalesInquriesService);
    expect(service).toBeTruthy();
  });
});
