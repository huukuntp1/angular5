import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingArticleComponent } from './paging-article.component';

describe('PagingArticleComponent', () => {
  let component: PagingArticleComponent;
  let fixture: ComponentFixture<PagingArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
