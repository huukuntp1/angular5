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
import { map } from 'rxjs/operators/map';

import { mainFunction } from './mainFunction.service';

@Injectable()
export class userService {

  constructor (
    private mainFunction: mainFunction
  ) {}

  userLogin (infoUser): Observable<any> {
    return this.mainFunction.postData('/users/login', infoUser)
                              .map(res => console.log(res))
  }

  userRegister (infoUser): Observable<any> {
    debugger
    return this.mainFunction.postData('/users', infoUser)
                              .map(res => console.log(res))
  }
}
