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

import { Article } from '../models/article.model';
import { CONFIG } from '../libs/config';

@Injectable()
export class optionsArticlesService {
  private optionsArticles = {
    limit: CONFIG.limit,
    offset: 0
  }

  private dataParamArticles = new BehaviorSubject<any>( this.optionsArticles );
  currentDataParamArticles = this.dataParamArticles.asObservable().pipe(distinctUntilChanged());

  private isLoading = new BehaviorSubject<any>(false);
  currentLoading = this.isLoading.asObservable();

  constructor ( ) {}

  setOptionsArticles (options: object) {
    this.dataParamArticles.next(options)
  }
}
