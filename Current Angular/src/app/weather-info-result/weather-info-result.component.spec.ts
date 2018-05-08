import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoResultComponent } from './weather-info-result.component';

describe('WeatherInfoResultComponent', () => {
  let component: WeatherInfoResultComponent;
  let fixture: ComponentFixture<WeatherInfoResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
