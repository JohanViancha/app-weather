import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';
import { TypeTemperature } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-type-temperature',
  templateUrl: './type-temperature.component.html',
  styleUrls: ['./type-temperature.component.scss']
})
export class TypeTemperatureComponent implements OnInit {

  typeTemperature: TypeTemperature[] = [
      {
        label:'°C',
        name:'Celcius',
        select:true,
        units:'metric'

      },

      {
        label:'°F',
        name:'Fahrenheit',
        select:false,
        units:'imperial'

      },
      {
        label:'K',
        name: 'Kelvin',
        select:false,
        units:'standard'

      }
  ];

  constructor(private weatherService: WeatherService) { 
  }

  ngOnInit(): void {


  }

  changeTypeTemperature(units:string){
    this.typeTemperature.map((el)=>el.units === units? el.select=true:el.select=false);
    this.weatherService.changeTypeTemperature$.next(units);
  }
}
