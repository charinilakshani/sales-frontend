import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininqurieComponent } from './admininqurie.component';

describe('AdmininqurieComponent', () => {
  let component: AdmininqurieComponent;
  let fixture: ComponentFixture<AdmininqurieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininqurieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininqurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
