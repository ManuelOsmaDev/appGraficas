import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-graficas-doble',
  templateUrl: './graficas-doble.component.html',
  styleUrls: ['./graficas-doble.component.scss']
})
export class GraficasDobleComponent {
  proveedoresData: ChartDataset[]=[
    {data:[100,200,300,400,500], label: 'Vendedor A'},
    {data:[50,250,30,450,200], label: 'Vendedor B'}
  ];

  proveedoresLabels: string[] = ['2021','2022','2023','2024','2025'];

  productoData: ChartDataset[]=[
    {data: [200,300,400,100,300],label:'carros',backgroundColor:'blue'}
  ]


}
