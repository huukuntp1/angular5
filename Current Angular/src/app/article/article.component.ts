import { Component, OnInit, Input } from '@angular/core';

import { getArticleService, optionsArticlesService } from '../core/services';
import { Article } from '../core/models/article.model';
import { Filters } from '../core/models/filter.model';
import { CONFIG } from '../core/libs/config';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() newArticles: Article;
  public articles;
  public totalPage;

  public params = {};

  filters: Filters;

  constructor(
    private getArticleService: getArticleService,
    private optionsArticlesService: optionsArticlesService
  ) {}

  ngOnInit() {
    this.optionsArticlesService.currentDataParamArticles.subscribe(res => this.params = res);
    this.getArticleService.getArticle( this.params ).subscribe();
    this.getArticle();
  }

  getArticle () {
    this.getArticleService.currentDataArticles.subscribe((res) => {

      this.articles = res.articles;
      res.articlesCount && (this.totalPage = Array.from(new Array(Math.round(res.articlesCount / CONFIG.limit)), (val, index) => index + 1));
    })
  }
}
