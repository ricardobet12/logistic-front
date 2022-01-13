import { TestBed } from '@angular/core/testing';

import { FormTerrestreService } from './form-terrestre.service';

describe('FormTerrestreService', () => {
  let service: FormTerrestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTerrestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
