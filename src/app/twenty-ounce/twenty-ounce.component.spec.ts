import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyOunceComponent } from './twenty-ounce.component';

describe('TwentyOunceComponent', () => {
  let component: TwentyOunceComponent;
  let fixture: ComponentFixture<TwentyOunceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyOunceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyOunceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
