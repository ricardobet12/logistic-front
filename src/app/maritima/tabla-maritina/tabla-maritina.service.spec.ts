import { TestBed } from '@angular/core/testing';

import { TablaMaritinaService } from './tabla-maritina.service';

describe('TablaMaritinaService', () => {
  let service: TablaMaritinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaMaritinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
