import {Component, ViewEncapsulation} from '@angular/core';

import {LineChartService} from './lineChart.service';

// for now just use style loader until the scss is changed for emulated view encapsulation
import 'style!./lineChart.scss';

@Component({
  selector: 'line-chart',
  // encapsulation: ViewEncapsulation.Emulated,
  // styleUrls: ['./lineChart.scss'],
  templateUrl: './lineChart.html'
})
export class LineChart {

  chartData:Object;

  constructor(private _lineChartService:LineChartService) {
    this.chartData = this._lineChartService.getData();
  }

  initChart(chart:any) {
    let zoomChart = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
