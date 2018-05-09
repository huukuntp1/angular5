import { Component, OnInit, Input } from '@angular/core';

import {
  getTagsService,
  getArticleService,
  optionsArticlesService,
  userService
} from '../core/services';

import { CONFIG } from '../core/libs/config';

@Component({
  selector: 'app-conduit',
  templateUrl: './conduit.component.html',
  styleUrls: ['./conduit.component.css']
})
export class ConduitComponent implements OnInit {
  @Input() limit;
  public listTags = [];
  public tagsLoaded = false;
  public newArticles = [];
  public params;

  constructor(
    private getTagsService: getTagsService,
    private getArticleService: getArticleService,
    private optionsArticlesService: optionsArticlesService,
    private userService: userService
  ) { }

  ngOnInit() {
    this.optionsArticlesService.currentDataParamArticles.subscribe(res => this.params = res);
    this.userService.currentDataUser.subscribe(res => console.log(res))
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

  handleListByTags (tag) {
    let setParams = Object.assign(
      {},
      this.params,
      { tag },
      { offset: 0 }
    );

    this.optionsArticlesService.setOptionsArticles(setParams);
    this.tagsLoaded = false;
    this.getArticleService.getArticle( this.params)
      .subscribe(()=> {
        this.tagsLoaded = true;
      });
  }
}
