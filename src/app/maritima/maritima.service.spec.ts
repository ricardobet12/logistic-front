import { TestBed } from '@angular/core/testing';

import { MaritimaService } from './maritima.service';

describe('MaritimaService', () => {
  let service: MaritimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaritimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
