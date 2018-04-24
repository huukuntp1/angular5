import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import {NgForm} from '@angular/forms';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  dataCity = [];
  dataForecast = [];
  public city: string;
  chart = [];

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.fetchDataCity('');
    this.fetchDataForecast('');
  }

  handleSubmit(f: NgForm) {
    this.fetchDataCity(f.value.YourCityName);
  }

  fetchDataCity (f) {
    this.weatherService.getAPIByCity(f)
    .subscribe(
      (res) => {
        // res = Array.isArray(res) ? res : [res];
        this.dataCity = res;
        this.fetchDataForecast(res['id'])
      }
    )
  }

  fetchDataForecast (id) {
    this.weatherService.getAPIByForecast(id)
      .subscribe(
        (res) => {
          this.dataForecast = res;

          let temp_max = res['list'].map(res => res.main.temp_max);
          let temp_min = res['list'].map(res => res.main.temp_min);
          let alldates = res['list'].map(res => res.dt);
          let weatherDates = [];


          console.log(temp_max);
          console.log(temp_min);
          console.log(alldates);
          console.log(res);

          alldates.map((res)=>{
            let jsDate = new Date(res * 1000)
            console.log(jsDate);
            weatherDates.push(jsDate.toLocaleDateString('en', {
              year: 'numeric', month: 'short', day: 'numeric'
            }))
          })

          console.log(weatherDates)

          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: weatherDates,
              datasets: [
                {
                  data: temp_max,
                  borderColor: "#ff0000",
                  fill: false
                },
                {
                  data: temp_min,
                  borderColor: "#ffcc00",
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }],
              }
            }
          });
        }
      )
  }
}
