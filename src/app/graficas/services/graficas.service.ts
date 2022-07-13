import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private htpp:HttpClient) { }

  getUsariosRedesSociales(){
    return this.htpp.get('http://localhost:3000/grafica')
  }
}
