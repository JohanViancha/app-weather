import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNextWeatherComponent } from './card-next-weather.component';

describe('CardNextWeatherComponent', () => {
  let component: CardNextWeatherComponent;
  let fixture: ComponentFixture<CardNextWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNextWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNextWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
