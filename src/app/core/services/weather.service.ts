import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Coord, EnumTypeTemperature, Place, PlaceWeather,TodayWeather } from 'src/app/page/weather/models/places.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrlWeather:string = '';
  apiUrlGeo:string= '';
  apiIcon:string = '';
  apiWeatheroday:string = '';
  apiWeatherToday:string = '';
  querData$: Subject<string> = new Subject();
  placeData$: BehaviorSubject<Place> = new BehaviorSubject<Place>({ lat:0,
    lon:0,
    name: '',
    country:'',
    state: ''});
  changeTypeTemperature$:Subject<EnumTypeTemperature> = new Subject();

  constructor(private http: HttpClient) {
    this.apiUrlWeather = environment.apiWeahter;
    this.apiUrlGeo = environment.apiGeo;
    this.apiIcon = environment.apiIcon;
    this.apiWeatherToday = environment.apiWeatherToday;
   }


   searchPlaces(query:string):Observable<Place[]>{
    return this.http.get<Place[]>(`${this.apiUrlGeo}?limit=10&q=${query}`)
   }

   getClimaPlace(location: Coord, unit:string = 'metric'): Observable<PlaceWeather>{
    return this.http.get<PlaceWeather>(`${this.apiUrlWeather}?units=${unit}&lat=${location.lat}&lon=${location.lon}`)
   }

   getWeatherToday(location: Coord, unit:string): Observable<TodayWeather>{
    console.log(unit);
    return this.http.get<TodayWeather>(`${this.apiWeatherToday}?units=${unit}&lat=${location.lat}&lon=${location.lon}`)
   }
}
