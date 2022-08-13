import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';
import { Coord, EnumTypeTemperature, Place, TodayWeather } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {


  showToday: boolean = false;
  todayData: TodayWeather = {};
  dateToday: Date = new Date();
  unit: string = '°C';
  location: Coord = {lat:0, lon:0};
  constructor(private weatherServices: WeatherService) {

   }

  ngOnInit(): void {

    this.weatherServices.placeData$.subscribe((data:Place)=>{
      this.location = this.getCoord(data);
      this.showToday = !this.showToday;
      this.getCurrenWeather(this.location, this.unit);
    });

    this.weatherServices.changeTypeTemperature$.subscribe((type)=>{
      this.unit = this.getUnit(type);
      this.getCurrenWeather(this.location, type);
    })
    
    
  }

  getCoord(data: Place){
    return {lat:data.lat, lon:data.lon};
  }

  getCurrenWeather(coord:Coord, unit:string = 'metric'){
      this.weatherServices.getWeatherToday(coord, unit).subscribe((data: TodayWeather)=>{
        this.todayData = data;
      })
  
  }

  hideToday(){
    this.showToday = !this.showToday;
  }

  getUnit(type:string){

    switch (type){
      case EnumTypeTemperature.Metric:
        return '°C';
      case EnumTypeTemperature.Standard:
        return 'K';
      case EnumTypeTemperature.Imperial:
        return '°F';
      default:
        return '°F'

    }
  }


}
