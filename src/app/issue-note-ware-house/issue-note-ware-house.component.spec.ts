import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueNoteWareHouseComponent } from './issue-note-ware-house.component';

describe('IssueNoteWareHouseComponent', () => {
  let component: IssueNoteWareHouseComponent;
  let fixture: ComponentFixture<IssueNoteWareHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueNoteWareHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueNoteWareHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
