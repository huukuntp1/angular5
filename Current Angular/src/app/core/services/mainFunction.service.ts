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
        'Accept': 'application/json'
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

  errorHandle (err: HttpErrorResponse) {
    return Observable
            .throw('Message: ' + err.message + ' - Status: ' + err.status)
  }
}
