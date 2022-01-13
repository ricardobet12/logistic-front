import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaritimaComponent } from './form-maritima.component';

describe('FormMaritimaComponent', () => {
  let component: FormMaritimaComponent;
  let fixture: ComponentFixture<FormMaritimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaritimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaritimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
