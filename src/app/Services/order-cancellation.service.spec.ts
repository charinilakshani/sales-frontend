import { TestBed } from '@angular/core/testing';

import { OrderCancellationService } from './order-cancellation.service';

describe('OrderCancellationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderCancellationService = TestBed.get(OrderCancellationService);
    expect(service).toBeTruthy();
  });
});
