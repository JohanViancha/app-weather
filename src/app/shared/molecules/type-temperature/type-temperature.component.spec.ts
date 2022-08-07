import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTemperatureComponent } from './type-temperature.component';

describe('TypeTemperatureComponent', () => {
  let component: TypeTemperatureComponent;
  let fixture: ComponentFixture<TypeTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTemperatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
