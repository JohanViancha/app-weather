import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { places } from 'src/app/page/weather/models/places.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrlWeather:string = '';
  apiUrlGeo:string= '';
  querData$: Subject<string> = new Subject();
  constructor(private http: HttpClient) {
    this.apiUrlWeather = environment.apiWeahter;
    this.apiUrlGeo = environment.apiGeo;
   }


   searchPlaces(query:string):Observable<places[]>{
    return this.http.get<places[]>(`${this.apiUrlGeo}?&limit=10&q=${query}`);
   }


}
