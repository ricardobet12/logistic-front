import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrestreComponent } from './terrestre.component';

describe('TerrestreComponent', () => {
  let component: TerrestreComponent;
  let fixture: ComponentFixture<TerrestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
