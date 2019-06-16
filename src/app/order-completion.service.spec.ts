import { TestBed } from '@angular/core/testing';

import { OrderCompletionService } from './Services/order-completion.service';

describe('OrderCompletionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderCompletionService = TestBed.get(OrderCompletionService);
    expect(service).toBeTruthy();
  });
});
