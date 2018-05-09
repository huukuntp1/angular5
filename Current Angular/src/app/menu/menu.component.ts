import { Component, OnInit } from '@angular/core';

import { userService } from '../core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isAuthed = false;
  public userName = '';

  constructor(
    private userService: userService
  ) { }

  ngOnInit() {
    this.userService.currentDataUser.subscribe(({ username }) => {

      this.isAuthed = !!username;
      this.userName = username || '';
    })
  }

  Logout () {
    this.userService.Logout();
  }
}
