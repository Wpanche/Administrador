import { Component, OnInit } from '@angular/core';
import { ListaPrincipalService } from './lista-principal.service'
@Component({
  selector: 'app-lista-principal',
  templateUrl: './lista-principal.component.html',
  styleUrls: ['./lista-principal.component.css']
})
export class ListaPrincipalComponent implements OnInit {
  private allComponente = [];
  ngOnInit() {

  }
  constructor(private service: ListaPrincipalService) {
    service.ConsultarListaSps(datos => this.allComponente = datos);
  }
}
