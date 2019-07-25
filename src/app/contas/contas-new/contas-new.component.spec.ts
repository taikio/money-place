import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasNewComponent } from './contas-new.component';

describe('ContasNewComponent', () => {
  let component: ContasNewComponent;
  let fixture: ComponentFixture<ContasNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
