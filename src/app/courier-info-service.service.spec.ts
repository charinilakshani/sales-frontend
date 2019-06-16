import { TestBed } from '@angular/core/testing';

import { CourierInfoServiceService } from './courier-info-service.service';

describe('CourierInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourierInfoServiceService = TestBed.get(CourierInfoServiceService);
    expect(service).toBeTruthy();
  });
});
