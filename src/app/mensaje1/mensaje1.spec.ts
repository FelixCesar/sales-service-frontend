import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensaje1 } from './mensaje1';

describe('Mensaje1', () => {
  let component: Mensaje1;
  let fixture: ComponentFixture<Mensaje1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensaje1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mensaje1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
