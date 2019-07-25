import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasNewComponent } from './despesas-new.component';

describe('DespesasNewComponent', () => {
  let component: DespesasNewComponent;
  let fixture: ComponentFixture<DespesasNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesasNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
