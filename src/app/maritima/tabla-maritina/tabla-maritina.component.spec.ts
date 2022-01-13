import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMaritinaComponent } from './tabla-maritina.component';

describe('TablaMaritinaComponent', () => {
  let component: TablaMaritinaComponent;
  let fixture: ComponentFixture<TablaMaritinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMaritinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMaritinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
