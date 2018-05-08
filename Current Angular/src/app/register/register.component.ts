import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { userService } from '../core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: userService
  ) { }

  ngOnInit() {
  }

  handleSubmit(f: NgForm) {
    const infoUser = {
      user: {
        username: f.value.user,
        email: f.value.email,
        password: f.value.psw
      }
    }

    this.userService.userRegister(infoUser)
      .subscribe(res => console.log(res))
  }
}
