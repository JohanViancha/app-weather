import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapWeather, Wind } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-card-today-highlight',
  templateUrl: './card-today-highlight.component.html',
  styleUrls: ['./card-today-highlight.component.scss']
})
export class CardTodayHighlightComponent implements OnInit, OnChanges {

  @Input() data: MapWeather = {
    id: '',
    value: 0,
    name: '',
    unit: ''
  };


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
  }

}
