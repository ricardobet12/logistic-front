import { TestBed } from '@angular/core/testing';

import { FormMaritimaService } from './form-maritima.service';

describe('FormMaritimaService', () => {
  let service: FormMaritimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMaritimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
