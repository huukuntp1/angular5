import { Injectable } from '@angular/core';
import { CONFIG } from '../libs/config'

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class mainFunction {

  private url = CONFIG.urlAPI;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };

  constructor (
    private http: HttpClient
  ) {}

  fetchData (path: string, params: HttpParams = new HttpParams): Observable<any> {
    return this.http
                .get(`${this.url}${path}`, { params })
                .catch(this.errorHandle);
  }

  postData (path: string, body: Object = {}): Observable<any> {
    return this.http
                .post(
                  `${this.url}${path}`,
                  body,
                  this.httpOptions
                )
                .catch(this.errorHandle)
  }

  putData (path: string, body: Object = {}): Observable<any> {
    // Authorization
    const token = this.getUserToLocalStorage().token;
    if ( token ) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Token ${token}`
        })
      }
    }
    return this.http
                .put(
                  `${this.url}${path}`,
                  body,
                  this.httpOptions
                )
                .catch(this.errorHandle)
  }

  errorHandle (err: HttpErrorResponse) {
    return Observable
            .throw('Message: ' + err.message + ' - Status: ' + err.status)
  }

  getUserToLocalStorage () {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  saveUserToLocalStorage ( user: object ) {
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  removeUserToLocalStorage () {
    window.localStorage.removeItem('currentUser');
  }
}
