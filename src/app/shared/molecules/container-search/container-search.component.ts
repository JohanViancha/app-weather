import { AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-container-search',
  templateUrl: './container-search.component.html',
  styleUrls: ['./container-search.component.scss']
})
export class ContainerSearchComponent implements OnInit {

  constructor(private weatherServices: WeatherService) { 

   
  }

  ngOnInit(): void {

    
  }

}
