import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesOrdersComponent } from './view-sales-orders.component';

describe('ViewSalesOrdersComponent', () => {
  let component: ViewSalesOrdersComponent;
  let fixture: ComponentFixture<ViewSalesOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSalesOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
