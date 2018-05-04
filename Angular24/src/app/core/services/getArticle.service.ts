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
export class getArticleService {

  constructor (
    private mainFunction: mainFunction
  ) {}

  getArticle (params): Observable<any> {
    return this.mainFunction.fetchData('/articles', params)
                              .map(res => res.articles)
  }
}
