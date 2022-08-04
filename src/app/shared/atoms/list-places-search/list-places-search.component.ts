import { Component, Input, OnInit } from '@angular/core';
import { places } from 'src/app/page/weather/models/places.models';

@Component({
  selector: 'app-list-places-search',
  templateUrl: './list-places-search.component.html',
  styleUrls: ['./list-places-search.component.scss']
})
export class ListPlacesSearchComponent implements OnInit {

  @Input() place: places = {name:'', lat:'', log:'',country:''};
  constructor() { }

  ngOnInit(): void {
  }

}
