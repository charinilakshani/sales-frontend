import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerInformationComponent } from './view-customer-information.component';

describe('ViewCustomerInformationComponent', () => {
  let component: ViewCustomerInformationComponent;
  let fixture: ComponentFixture<ViewCustomerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
