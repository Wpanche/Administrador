import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaPrincipalComponent } from './lista-principal/lista-principal.component';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModulosComponent } from './modulos/modulos.component';
import { CrearModuloComponent } from './crear-modulo/crear-modulo.component';

const appRoutes: Routes = [

  {
    path: 'Inicio',
    component: ListaPrincipalComponent,
    children: [
      {
        path: 'Modulos',
        component: ModulosComponent,
        outlet: "menu"
      }, {
        path: 'CrearModulo',
        component: CrearModuloComponent,
        outlet: "menu"
      }
    ]
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaPrincipalComponent,
    LoginComponent,
    ModulosComponent,
    CrearModuloComponent
  ],
  imports: [
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
