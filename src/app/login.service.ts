import { Injectable } from '@angular/core';

import { LoginModel } from './models/login'

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  private _url:string = "https://api.coinmarketcap.com/v1/ticker/";
  private _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {

  }

  fetchDataLogin (): Observable<LoginModel[]> {
    return this.http
                .get(this._url)
                .catch(this.errorHandle);
  }

  errorHandle (err: HttpErrorResponse) {
    return Observable.throw('Message: ' + err.message + ' - Status: ' + err.status)
  }
}
