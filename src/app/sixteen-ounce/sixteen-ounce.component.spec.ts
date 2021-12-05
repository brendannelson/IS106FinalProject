import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixteenOunceComponent } from './sixteen-ounce.component';

describe('SixteenOunceComponent', () => {
  let component: SixteenOunceComponent;
  let fixture: ComponentFixture<SixteenOunceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixteenOunceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixteenOunceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
