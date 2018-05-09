import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { userService } from '../core/services';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  form : FormGroup;
  public user: object = {};

  constructor(
    private fb: FormBuilder,
    private userService: userService
  ) {
    this.form = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
   }

  ngOnInit() {
    this.userService.currentDataUser.subscribe((res) => {
      Object.assign(this.user, res)
      this.form.patchValue(res)
    })
  }

  handleSubmit () {
    Object.assign(this.user, this.form.value)

    this.userService.updateUser({ user: this.user})
      .subscribe((res) => {

      })
  }
}
