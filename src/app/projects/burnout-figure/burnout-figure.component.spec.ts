import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnoutFigureComponent } from './burnout-figure.component';

describe('BurnoutFigureComponent', () => {
  let component: BurnoutFigureComponent;
  let fixture: ComponentFixture<BurnoutFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnoutFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnoutFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
