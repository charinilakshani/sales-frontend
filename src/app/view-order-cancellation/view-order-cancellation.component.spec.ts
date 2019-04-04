import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderCancellationComponent } from './view-order-cancellation.component';

describe('ViewOrderCancellationComponent', () => {
  let component: ViewOrderCancellationComponent;
  let fixture: ComponentFixture<ViewOrderCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
