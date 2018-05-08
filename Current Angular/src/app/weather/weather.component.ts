import { Component, OnInit } from '@angular/core';

import { WeatherSearchComponent } from '../weather-search/weather-search.component'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
