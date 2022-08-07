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
  unit:string = 'metric';
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService.changeTypeTemperature$.subscribe((unit)=>{
      this.getWeatherPlace({lat:0, lon:0, country:'',name:''},unit);
      this.unit = unit;
    })

    this.weatherService.placeData$.subscribe((place:Place)=>{
      this.getWeatherPlace(place,this.unit);
    });
  }
  
    getWeatherPlace(place:Place = {lat:0, lon:0, country:'',name:''},unit='metric'){
      this.weatherService.placeData$.subscribe((data)=>{
        place =data;
      });
      const coor: Coord = {lat: place.lat,lon:place.lon};
      this.weatherService.getClimaPlace(coor, unit).subscribe((data:PlaceWeather)=>{
        this.dataWeather = data;
      })
    }



}
