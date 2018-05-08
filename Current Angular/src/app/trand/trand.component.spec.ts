import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandComponent } from './trand.component';

describe('TrandComponent', () => {
  let component: TrandComponent;
  let fixture: ComponentFixture<TrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
