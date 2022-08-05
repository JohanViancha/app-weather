import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlaceWeather } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-card-next-weather',
  templateUrl: './card-next-weather.component.html',
  styleUrls: ['./card-next-weather.component.scss']
})
export class CardNextWeatherComponent implements OnInit, OnChanges {

  @Input() dataWeather: PlaceWeather = {}
  listWeather : PlaceWeather = {};
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.listWeather = this.dataWeather;
  }

  ngOnInit(): void {
  }


}
