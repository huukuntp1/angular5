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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

import { Article } from '../models/article.model'
import { CONFIG } from '../libs/config'
import { mainFunction } from './mainFunction.service';


@Injectable()
export class getArticleService {
  private dataArticles = new BehaviorSubject<any>({});
  currentDataArticles = this.dataArticles.asObservable().pipe(distinctUntilChanged());

  public params = {
    limit: CONFIG.limit
 }

  constructor (
    private mainFunction: mainFunction
  ) {}

  getArticle (params): Observable<any> {
    return this.mainFunction.fetchData('/articles',
                                new HttpParams({ fromObject: params })
                              )
                              .map(res => {
                                this.dataArticles.next(res)
                                return res;
                              });
  }
}
