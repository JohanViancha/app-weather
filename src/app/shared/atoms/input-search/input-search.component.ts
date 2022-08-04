import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  place:string = '';
  constructor(private weatherServices : WeatherService) { 

  }

  ngOnInit(): void {

  }
  

  sendQuery(){
    this.weatherServices.querData$.next(this.place)
  }


}
