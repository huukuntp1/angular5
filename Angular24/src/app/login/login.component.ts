import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,) { }

  public dataLogin = [];
  public errSubmit;
  returnUrl:String ;

  ngOnInit() {
    this.loginService.logout();
  }

  handleSubmit(f: NgForm) {
    this.loginService
      .fetchDataLogin({
        email: f.value.uname,
        password: f.value.psw
      })
      .subscribe(
        data => {
          this.router.navigate(['success']);
        }
      )
  }
}
