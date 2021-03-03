import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  label1: string = 'Cozinha/Lavanderia';
  label2: string = 'Quarto/Sala';

  apar1: string = 'Liquidificador';
  apar2: string = 'Air Fryer';
  apar3: string = 'Geladeira';
  apar4: string = 'Aspirador de pó';

  Highcharts = Highcharts;

  charts1: {};
  charts2: {};

  constructor() {
    this.charts1 = {};
    this.charts2 = {};
   }

  ngOnInit(): void {
    this.charts2 = {
      chart: {
          type: 'area'
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
          data: [70, 10, 56, 50, ]
      }]
    };
  }

}
