import { TestBed } from '@angular/core/testing';

import { TablaTerrestreService } from './tabla-terrestre.service';

describe('TablaTerrestreService', () => {
  let service: TablaTerrestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaTerrestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
