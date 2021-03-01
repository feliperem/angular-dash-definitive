import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  label: string = 'Geladeira';
  porcentagem: string = '50';
  total: string = "100";

  label1: string = 'Geladeira';
  porcentagem1: string = '10';
  total1: string = "32";


  
  Highcharts = Highcharts;

  chartOptions: {};
  charts1: {};
  charts2: {};
  pie1: {};
  pie2: {};
  

  constructor() {
    this.chartOptions = {};
    this.charts1 = {};
    this.charts2 = {};
    this.pie1 = {};
    this.pie2 = {};
   }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Cômodos com maior consumo nos ultimos 7 dias'
      },
      xAxis: {
          categories: ['6 dias atrás', '5 dias atrás', '4 dias atrás', '3 dias atrás', '2 dias atrás', 'Ontem', 'Hoje'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'kWh'
          },
      },
      tooltip: {
          split: true,
          valueSuffix: ' kWh'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Sala',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Cozinha',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Banheiro',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Quarto 1',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Quarto 2',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };
  HC_exporting(Highcharts);


  this.charts1 = {
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
        data: [70, 80, 56, 32, ]
    }]
};

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

this.pie1 = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Aparelhos com maior gasto em kWh (Total)'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Microondas',
        y: 11.84
    }, {
        name: 'Televisão',
        y: 10.85
    }, {
        name: 'Computador',
        y: 4.67
    }, {
        name: 'Aspirador de pó',
        y: 4.18
    }]
  }]
}


this.pie2 = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Aparelhos com mais tempo ligado'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: 'hrs'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} hrs'
          }
      }
  },
  exporting: {
    enabled: false
  },
  creditts: {
    enabled: false
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Geladeira',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Microondas',
          y: 11.84
      }, {
          name: 'Televisão',
          y: 10.85
      }, {
          name: 'Computador',
          y: 4.67
      }, {
          name: 'Aspirador de pó',
          y: 4.18
      }]
  }]
}





  }

}
