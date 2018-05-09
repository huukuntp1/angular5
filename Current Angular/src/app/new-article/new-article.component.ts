import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

import { getTagsService } from '../core/services';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  listTags ;
  form: FormGroup;

  constructor(
    private getTagsService: getTagsService,
    private formBuiler: FormBuilder
  ) {
    this.form = this.formBuiler.group({
      title: '',
      description: '',
      body: '',
      tagFiel: ''
    })
  }

  ngOnInit() {
    this.getTagsService.currentDatatags
      .subscribe(({ tags }) => {
        this.listTags = tags || ''
      })
  }

  addTag () {
    this.listTags.push(this.form.value.tagFiel)
  }

  submitForm () {
    Object.assign(this.form.value, this.listTags)
    console.log(this.form.value)
  }

  deleteTag (tag) {
    this.listTags = this.listTags.filter(res => res !== tag)
  }
}
