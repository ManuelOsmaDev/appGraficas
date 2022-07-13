import { Component  } from '@angular/core';
interface MenuItem{
  ruta:string,
  texto:string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menu:MenuItem[]=[
    {ruta:'./graficas/barra', texto: 'Barras'},
    {ruta:'./graficas/graficas-dobles', texto: 'Barras doble'},
    {ruta:'./graficas/dona', texto: 'Dona'},
    {ruta:'./graficas/dona-http', texto: 'Dona Http'},
  ]

}
