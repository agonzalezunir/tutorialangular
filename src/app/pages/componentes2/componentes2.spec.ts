import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes2 } from './componentes2';

describe('Componentes2', () => {
  let component: Componentes2;
  let fixture: ComponentFixture<Componentes2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentes2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
