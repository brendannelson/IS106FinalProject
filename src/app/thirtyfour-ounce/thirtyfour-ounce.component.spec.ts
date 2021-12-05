import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyfourOunceComponent } from './thirtyfour-ounce.component';

describe('ThirtyfourOunceComponent', () => {
  let component: ThirtyfourOunceComponent;
  let fixture: ComponentFixture<ThirtyfourOunceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtyfourOunceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyfourOunceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
