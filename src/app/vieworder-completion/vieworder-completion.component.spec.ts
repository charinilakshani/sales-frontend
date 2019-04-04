import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderCompletionComponent } from './vieworder-completion.component';

describe('VieworderCompletionComponent', () => {
  let component: VieworderCompletionComponent;
  let fixture: ComponentFixture<VieworderCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
