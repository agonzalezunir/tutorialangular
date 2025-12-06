import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primerproyecto } from './primerproyecto';

describe('Primerproyecto', () => {
  let component: Primerproyecto;
  let fixture: ComponentFixture<Primerproyecto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Primerproyecto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primerproyecto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
