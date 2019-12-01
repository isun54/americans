import { TestBed } from '@angular/core/testing';

import { ContectService } from './contect.service';

describe('ContectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContectService = TestBed.get(ContectService);
    expect(service).toBeTruthy();
  });
});
