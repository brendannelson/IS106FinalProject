import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtytwoOunceComponent } from './thirtytwo-ounce.component';

describe('ThirtytwoOunceComponent', () => {
  let component: ThirtytwoOunceComponent;
  let fixture: ComponentFixture<ThirtytwoOunceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtytwoOunceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtytwoOunceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
