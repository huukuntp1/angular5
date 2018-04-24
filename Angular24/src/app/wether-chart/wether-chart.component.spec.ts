import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherChartComponent } from './wether-chart.component';

describe('WetherChartComponent', () => {
  let component: WetherChartComponent;
  let fixture: ComponentFixture<WetherChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetherChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetherChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
