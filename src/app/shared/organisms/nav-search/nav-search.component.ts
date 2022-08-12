import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {

  constructor(private weatherServices: WeatherService) {

   }

  ngOnInit(): void {
   
    this.weatherServices.placeData$.subscribe((data)=>{
      const coord = {lat:data.lat, lon:data.lon};
      this.weatherServices.getWeatherToday(coord).subscribe((data)=>{
        console.log(data)
      })
    })
  }

}
