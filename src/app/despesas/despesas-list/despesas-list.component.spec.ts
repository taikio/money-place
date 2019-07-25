import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasListComponent } from './despesas-list.component';

describe('DespesasListComponent', () => {
  let component: DespesasListComponent;
  let fixture: ComponentFixture<DespesasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
