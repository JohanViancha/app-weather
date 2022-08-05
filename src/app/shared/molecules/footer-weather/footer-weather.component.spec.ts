import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWeatherComponent } from './footer-weather.component';

describe('FooterWeatherComponent', () => {
  let component: FooterWeatherComponent;
  let fixture: ComponentFixture<FooterWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
