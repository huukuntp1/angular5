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

import { mainFunction } from './mainFunction.service';

@Injectable()
export class getTagsService {
  private dataTags = new BehaviorSubject<any>({});
  currentDatatags = this.dataTags.asObservable();

  constructor (
    private mainFunction: mainFunction
  ) {}

  getTags (): Observable<any> {
    return this.mainFunction.fetchData('/tags')
                              .map((res) => {
                                this.dataTags.next(res);
                                return res.tags;
                              })
  }
}
