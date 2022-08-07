import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'dateDay'
})
export class DateDayPipe implements PipeTransform {


  transform(value: Date, ...args: unknown[]): unknown {

    return moment(value).format("ddd,D MMM")
  }

}
