import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTerrestreComponent } from './form-terrestre.component';

describe('FormTerrestreComponent', () => {
  let component: FormTerrestreComponent;
  let fixture: ComponentFixture<FormTerrestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTerrestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
