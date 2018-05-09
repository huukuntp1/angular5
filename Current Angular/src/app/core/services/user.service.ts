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
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { mainFunction } from './mainFunction.service';

@Injectable()
export class userService {

  public currentUSer = this.mainFunction.getUserToLocalStorage();
  private dataUser = new BehaviorSubject<any>(this.currentUSer ? (this.currentUSer) : {});
  currentDataUser = this.dataUser.asObservable();


  constructor (
    private mainFunction: mainFunction
  ) {}

  userLogin (infoUser): Observable<any> {
    return this.mainFunction.postData('/users/login', infoUser)
                              .map((res) => {
                                this.dataUser.next(res.user);
                                this.mainFunction.saveUserToLocalStorage(res.user);
                                return res.user.username;
                              })
  }

  userRegister (infoUser): Observable<any> {
    return this.mainFunction.postData('/users', infoUser)
                              .map((res) => {
                                this.dataUser.next(res.user);
                                this.mainFunction.saveUserToLocalStorage(res.user);
                                return res.user.username
                              })
  }

  updateUser (infoUser): Observable<any> {
    return this.mainFunction.putData('/user', infoUser)
                              .map((res) => {
                                this.dataUser.next(res.user);
                                this.mainFunction.saveUserToLocalStorage(res.user);
                                return res.user.username
                              })
  }

  Logout () {
    this.mainFunction.removeUserToLocalStorage();
    this.dataUser.next({});
  }
}
