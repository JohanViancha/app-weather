import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/app/page/weather/models/places.models';
import * as moment from 'moment';
@Pipe({
  name: 'listDayWeather'
})
export class ListDayWeatherPipe implements PipeTransform {

  transform(value: List[], ...args: unknown[]): List[] {

    let result = value.filter((item,index)=>{
      const date = moment(item.dt_txt).day();
      return value.map((el)=> moment(el.dt_txt).day()).indexOf(date) == index;
    });
    return result.splice(0,5); 
  }

}
