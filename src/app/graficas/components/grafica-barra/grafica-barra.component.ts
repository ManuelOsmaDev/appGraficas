import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.scss'],
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: '#0F92F6 ',
        hoverBackgroundColor: 'black',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: '#0DB2D4',
        hoverBackgroundColor: 'black',
      },
      {
        data: [12, 23, 6, 20, 19, 45, 48],
        label: 'Series C',
        backgroundColor: '#0FF65C',
        hoverBackgroundColor: 'black',
      },
    ],
  };

  constructor() {

  }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'bubble'
    }
  }
}
