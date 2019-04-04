import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMaterialsManagmentComponent } from './send-materials-managment.component';

describe('SendMaterialsManagmentComponent', () => {
  let component: SendMaterialsManagmentComponent;
  let fixture: ComponentFixture<SendMaterialsManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMaterialsManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMaterialsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
