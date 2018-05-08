import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  getArticleService,
  optionsArticlesService
} from '../core/services';
import { CONFIG } from '../core/libs/config';

@Component({
  selector: 'app-paging-article',
  templateUrl: './paging-article.component.html',
  styleUrls: ['./paging-article.component.css']
})
export class PagingArticleComponent implements OnInit {
  @Input() totalPage;
  public currentPage = 1;
  public params;

  constructor(
    private getArticleService: getArticleService,
    private optionsArticlesService: optionsArticlesService
  ) { }

  ngOnInit() {
    this.optionsArticlesService.currentDataParamArticles
      .subscribe(res => {
        res.offset === 0 && (this.currentPage = 1)
        return this.params = res
      });
  }

  goToPage (pageIndex) {
    let goPage = (CONFIG.limit * (pageIndex - 1));
    let setParams = Object.assign({}, this.params, { offset: goPage });

    this.optionsArticlesService.setOptionsArticles(setParams);
    this.currentPage = pageIndex;
    this.getArticleService.getArticle( setParams ).subscribe();
  }

}
