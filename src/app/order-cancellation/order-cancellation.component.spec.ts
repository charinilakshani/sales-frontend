import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCancellationComponent } from './order-cancellation.component';

describe('OrderCancellationComponent', () => {
  let component: OrderCancellationComponent;
  let fixture: ComponentFixture<OrderCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
