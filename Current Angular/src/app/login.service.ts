import { Injectable } from '@angular/core';

import { LoginModel } from './models/login'

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private _url:string = "http://5ae0da06ee98370014cf2429.mockapi.io/user";

  private _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {

  }

  fetchDataLogin (dataLogin: object): Observable<LoginModel[]> {
    return this.http
                .post(this._url, dataLogin, this._httpOptions)
                .catch(this.errorHandle)
                .map(user => {
                  if (user.email) {
                    localStorage
                      .setItem('currentUser', JSON.stringify(user.email));
                  }
                  return user;
                });
  }

  errorHandle (err: HttpErrorResponse) {
    return Observable
            .throw('Message: ' + err.message + ' - Status: ' + err.status)
  }

  logout() {
    localStorage
      .removeItem('currentUser');
  }
}
