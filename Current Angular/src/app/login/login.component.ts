import {
  Component,
  OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { userService } from '../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: userService
  ) { }

  public dataLogin = [];
  public errSubmit;
  returnUrl:String ;

  ngOnInit() {}

  handleSubmit(f: NgForm) {
    const infoUser = {
      user: {
        email: f.value.uname,
        password: f.value.psw
      }
    }
    this.userService.userLogin(infoUser)
      .subscribe(res => res && this.router.navigateByUrl('/conduit'))
  }
}
