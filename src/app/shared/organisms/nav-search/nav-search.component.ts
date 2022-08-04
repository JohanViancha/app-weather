import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';
import { places } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {

  places: places[] = [];
  constructor(private weatherServiceS: WeatherService) { }

  ngOnInit(): void {
    this.weatherServiceS.querData$.subscribe((data:string)=>{
      this.weatherServiceS.searchPlaces(data).subscribe((dataPlaces)=>{
        this.places = dataPlaces;
        
      });
  })
  }

}
