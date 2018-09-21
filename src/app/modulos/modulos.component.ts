import { Component, OnInit } from '@angular/core';
import {ModuloService} from './modulo.services'
@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  private allComponente = [];
  constructor(private service :ModuloService) {
    service.ConsultarListaSps(datos => this.allComponente = datos);
   }

  ngOnInit() {
    
  }

}
