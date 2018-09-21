import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../proxy.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario = "";
  public log = "";
  public verMenu = false;
  constructor(private proxy: ProxyService,public router: Router) { }

  ngOnInit() {
  }
  LoginIn() {
    var componente = this
    this.proxy.Login({ name: this.usuario, password: this.log }, function (data) {
      console.log(data)
      componente.router.navigate(['Inicio']);
    });
  }
}
