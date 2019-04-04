import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeadsInquriesComponent } from './view-leads-inquries.component';

describe('ViewLeadsInquriesComponent', () => {
  let component: ViewLeadsInquriesComponent;
  let fixture: ComponentFixture<ViewLeadsInquriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeadsInquriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeadsInquriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
