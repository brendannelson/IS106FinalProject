import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EighteenOunceComponent } from './eighteen-ounce.component';

describe('EighteenOunceComponent', () => {
  let component: EighteenOunceComponent;
  let fixture: ComponentFixture<EighteenOunceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighteenOunceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighteenOunceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
