import { Component, OnInit, Input } from '@angular/core';

import { getArticleService } from '../core/services'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() limit: number;
  public articles = [];

  constructor(
    private getArticleService: getArticleService
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle () {
    this.getArticleService.getArticle( this.limit )
      .subscribe( (res) => {
        this.articles = res
        console.log(this.articles)
      })
  }
}
