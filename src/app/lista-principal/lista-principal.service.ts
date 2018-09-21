import { Injectable } from '@angular/core';
import { ProxyService } from '../proxy.service'
import { RouterModule, Routes } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class ListaPrincipalService {
    private
    constructor(private Proxy: ProxyService) {
        
    }
    ConsultarListaSps(retorno) {
        this.Proxy.getDynamic({
            "Componente": "22C09A02-2FDD-437B-81CF-BF96D577F53D",
            "Parametros": {}
        }, datos => {
            
            retorno(datos)
        })
    }
}
