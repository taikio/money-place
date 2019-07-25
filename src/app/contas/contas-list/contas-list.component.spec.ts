import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasListComponent } from './contas-list.component';

describe('ContasListComponent', () => {
  let component: ContasListComponent;
  let fixture: ComponentFixture<ContasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
