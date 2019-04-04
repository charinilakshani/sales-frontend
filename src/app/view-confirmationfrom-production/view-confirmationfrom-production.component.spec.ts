import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfirmationfromProductionComponent } from './view-confirmationfrom-production.component';

describe('ViewConfirmationfromProductionComponent', () => {
  let component: ViewConfirmationfromProductionComponent;
  let fixture: ComponentFixture<ViewConfirmationfromProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConfirmationfromProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfirmationfromProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
