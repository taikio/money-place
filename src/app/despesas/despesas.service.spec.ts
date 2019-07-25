import { TestBed } from '@angular/core/testing';

import { DespesasService } from './despesas.service';

describe('DespesasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DespesasService = TestBed.get(DespesasService);
    expect(service).toBeTruthy();
  });
});
