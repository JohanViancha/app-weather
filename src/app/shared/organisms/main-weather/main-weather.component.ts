import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';
import { Coord, EnumTypeTemperature, MapWeather, Place, PlaceWeather, Wind } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss']
})
export class MainWeatherComponent implements OnInit {

  dataWeather: PlaceWeather = {};
  unit:EnumTypeTemperature = EnumTypeTemperature.Metric;
  wind: MapWeather = {id:'w',value:0, name:'Wind Status', unit:'mps'};
  humidity: MapWeather = {id:'h',value:0, name:'Humidity', unit:'%'};
  visibility: MapWeather = {id:'v',value:0, name:'Visibility', unit:'mt'};
  airPressure: MapWeather = {id:'a',value:0, name:'Air Pressure', unit:'hPa'};
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService.changeTypeTemperature$.subscribe((unit:EnumTypeTemperature)=>{
      this.getWeatherPlace({lat:0, lon:0, country:'',name:''},unit);
      this.unit = unit;
    })

    this.weatherService.placeData$.subscribe((place:Place)=>{
      this.getWeatherPlace(place,this.unit);
    });
  }
  
    async getWeatherPlace(place:Place = {lat:0, lon:0, country:'',name:''},unit:EnumTypeTemperature){
      this.weatherService.placeData$.subscribe((data)=>{
        place =data;
      });
      const coor: Coord = {lat: place.lat,lon:place.lon};
      this.weatherService.getClimaPlace(coor, unit).subscribe((data:PlaceWeather)=>{
        this.dataWeather = data;
        if(data.list?.length){
          this.getTypeWind();
          this.wind.value =  data.list[0].wind.speed;
          this.humidity.value =  data.list[0].main.humidity;
          this.airPressure.value = data.list[0].main.pressure;
          this.visibility.value = data.list[0].visibility;
        }
       
      })
    }

    async getTypeWind(){
      console.log(this.unit)
      switch(this.unit){
        case EnumTypeTemperature.Imperial:
          this.wind.unit = 'miph'
        break;
        case EnumTypeTemperature.Metric || EnumTypeTemperature.Standard:
          this.wind.unit = 'mps'
        break;
      }
    }



}
