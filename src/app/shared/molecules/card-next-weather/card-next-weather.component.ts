import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';
import { List, PlaceWeather } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-card-next-weather',
  templateUrl: './card-next-weather.component.html',
  styleUrls: ['./card-next-weather.component.scss']
})
export class CardNextWeatherComponent implements OnInit, OnChanges {

  @Input() dataWeather: PlaceWeather = {}
  listWeather : List[] = [];
  constructor(private servicesWeather: WeatherService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.listWeather = this.dataWeather.list || [];
  }

  ngOnInit(): void {
  }


}
