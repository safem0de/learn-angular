import { Component, } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'scrap-reports',
  templateUrl: './scrap-reports.component.html',
  styleUrls: ['./scrap-reports.component.scss']
})
export class ScrapReportsComponent {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };

  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

}