import { TestBed } from '@angular/core/testing';

import { TerrestreService } from './terrestre.service';

describe('TerrestreService', () => {
  let service: TerrestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
