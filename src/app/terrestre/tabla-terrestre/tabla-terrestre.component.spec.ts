import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTerrestreComponent } from './tabla-terrestre.component';

describe('TablaTerrestreComponent', () => {
  let component: TablaTerrestreComponent;
  let fixture: ComponentFixture<TablaTerrestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaTerrestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
