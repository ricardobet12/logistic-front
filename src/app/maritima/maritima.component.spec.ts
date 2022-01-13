import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimaComponent } from './maritima.component';

describe('MaritimaComponent', () => {
  let component: MaritimaComponent;
  let fixture: ComponentFixture<MaritimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaritimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
