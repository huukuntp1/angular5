import { Injectable } from '@angular/core';

import { WeatherModel } from './models/weather';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherService {

  private _cityDefault = "Go vap";
  private _idDefault = "1581130";
  private _urlWeather  = "http://api.openweathermap.org/data/2.5/weather?appid=65e374e4e797d45132c88753051c9656&units=metric&q=";
  private _urlForecast = "https://openweathermap.org/data/2.5/forecast/?appid=b6907d289e10d714a6e88b30761fae22&units=metric&id=";

  constructor(private http: HttpClient) { }

  getAPIByCity (city: string): Observable<WeatherModel[]> {
    const isCity = (city) ? city : this._cityDefault;

    return this.http
                .get<WeatherModel[]>(this._urlWeather + isCity)
                .catch(this.errorHandle);
  }

  getAPIByForecast (id: string): Observable<WeatherModel[]> {
    const isId = (id) ? id : this._idDefault;

    return this.http
                .get<WeatherModel>(this._urlForecast + isId)
                .catch(this.errorHandle);
  }

  errorHandle (err: HttpErrorResponse) {
    return Observable
            .throw('Message: ' + err.message + ' - Status: ' + err.status)
  }
}
