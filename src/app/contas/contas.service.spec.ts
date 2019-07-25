import { TestBed } from '@angular/core/testing';

import { ContasService } from './contas.service';

describe('ContasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContasService = TestBed.get(ContasService);
    expect(service).toBeTruthy();
  });
});
