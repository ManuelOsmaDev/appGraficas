import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss']
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    this.graficaService.getUsariosRedesSociales()
    .subscribe(d=>{
      const labels = Object.keys(d)
      const values = Object.values(d)
      this.doughnutChartLabels = labels
      this.doughnutChartData.datasets = values
      console.log(values);

    })
  }
  //arreglo para el funcionamiento de la grafica de dona
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [

    ]
  }

}
