import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';
import { Coord, Place, PlaceWeather } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss']
})
export class MainWeatherComponent implements OnInit {

  dataWeather: PlaceWeather = {};
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.placeData$.subscribe((place:Place)=>{
      const coor: Coord = {lat: place.lat,lon:place.lon};
      this.weatherService.getClimaPlace(coor).subscribe((data:PlaceWeather)=>{
        console.log(data);
        this.dataWeather = data;
      })
    })

  }

}
