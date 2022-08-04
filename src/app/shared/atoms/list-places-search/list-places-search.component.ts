import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';
import { places } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-list-places-search',
  templateUrl: './list-places-search.component.html',
  styleUrls: ['./list-places-search.component.scss']
})
export class ListPlacesSearchComponent implements OnInit {

  places: places[] = [];

  constructor(private weatherServiceS: WeatherService) { }

  ngOnInit(): void {
    this.weatherServiceS.querData$.subscribe((data:string)=>{
      this.weatherServiceS.searchPlaces(data).subscribe((dataPlaces)=>{
        console.log(dataPlaces)
        this.places = dataPlaces;
        
      });
  })
  }

}
