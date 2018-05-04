import { Component, OnInit } from '@angular/core';

import { getTagsService } from '../core/services'

@Component({
  selector: 'app-conduit',
  templateUrl: './conduit.component.html',
  styleUrls: ['./conduit.component.css']
})
export class ConduitComponent implements OnInit {

  public listTags = [];
  public tagsLoaded = false;

  constructor(
    private getTagsService: getTagsService
  ) { }

  ngOnInit() {
    this.getTags();
  }

  getTags () {
    this.tagsLoaded = false;
    this.getTagsService.getTags()
      .subscribe( (res) => {
        this.tagsLoaded = true;
        this.listTags = res;
      })
  }
}
