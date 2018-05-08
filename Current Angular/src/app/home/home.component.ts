import { Component, OnInit } from '@angular/core';
import { listTypeData } from '../listTypeData';
import { listData } from '../listData';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list = listData;
  public title;
  public clsActiveItem;
  public arrActive = [];
  public isBool = false;
  public listactive = false;
  public listinactive = false;

  constructor() { }

  ngOnInit() {
  }

  addTitle () {
    this.list.push({
      'id': this.list.length + 1,
      "name" : this.title
    });
    this.title = '';
  }

  deleteItem (index, id) {
    ( this.arrActive.indexOf(id) > -1 ) && this.arrActive.splice(this.arrActive.indexOf(id), 1);
    this.list.splice(index, 1);
  }

  isChecked (is) {
    ( this.arrActive.indexOf(is) > -1 ) ? this.arrActive.splice(this.arrActive.indexOf(is), 1) : this.arrActive.push(is);
  }

  filterActive () {
    this.isBool = true;
    this.listactive = true;
    this.listinactive = false;
  }

  infilterActive () {
    this.isBool = false;
    this.listactive = false;
    this.listinactive = true;
  }

  fullList () {
    this.listactive = false;
    this.listinactive = false;
  }
}
