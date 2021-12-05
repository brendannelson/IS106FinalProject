import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtythreeOunceComponent } from './thirtythree-ounce.component';

describe('ThirtythreeOunceComponent', () => {
  let component: ThirtythreeOunceComponent;
  let fixture: ComponentFixture<ThirtythreeOunceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtythreeOunceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtythreeOunceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
