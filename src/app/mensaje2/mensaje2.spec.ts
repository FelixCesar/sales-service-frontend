import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensaje2 } from './mensaje2';

describe('Mensaje2', () => {
  let component: Mensaje2;
  let fixture: ComponentFixture<Mensaje2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensaje2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mensaje2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
