import { Injectable } from '@angular/core';

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

  private url = "https://conduit.productionready.io/api";
  private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
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

  errorHandle (err: HttpErrorResponse) {
    return Observable
            .throw('Message: ' + err.message + ' - Status: ' + err.status)
  }
}
