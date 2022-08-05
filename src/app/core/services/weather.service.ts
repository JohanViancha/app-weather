import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subject } from 'rxjs';
import { Coord, Place, PlaceWeather } from 'src/app/page/weather/models/places.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrlWeather:string = '';
  apiUrlGeo:string= '';
  querData$: Subject<string> = new Subject();
  placeData$: Subject<Place> = new Subject();
  constructor(private http: HttpClient) {
    this.apiUrlWeather = environment.apiWeahter;
    this.apiUrlGeo = environment.apiGeo;
   }


   searchPlaces(query:string):Observable<Place[]>{
    return this.http.get<Place[]>(`${this.apiUrlGeo}?limit=10&q=${query}`)
   }

   getClimaPlace(location: Coord): Observable<PlaceWeather>{
    return this.http.get<PlaceWeather>(`${this.apiUrlWeather}?lat=${location.lat}&lon=${location.lon}`)
    .pipe(
      map((ele)=>ele)
    )    
   }


}
