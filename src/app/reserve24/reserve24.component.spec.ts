import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserve24Component } from './reserve24.component';

describe('Reserve24Component', () => {
  let component: Reserve24Component;
  let fixture: ComponentFixture<Reserve24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reserve24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reserve24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
