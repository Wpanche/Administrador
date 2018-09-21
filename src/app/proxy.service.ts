import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from "@angular/router";
var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'my-auth-token'

  })
};
interface token {
  token: string,
  logIn: boolean
};
@Injectable({
  providedIn: 'root'
})

export class ProxyService {


  constructor(private http: HttpClient, public router: Router) { }
  getDynamic(data, callback) {
    var componente = this
    var Options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')

      })
    };
    return this.http.post("http://localhost:3000/dynamic", (data || {}), Options)
      .pipe(
        catchError((error) => {
          if (!error.status||error.status === 403) {
            componente.router.navigate(['Login']);
          }
          return throwError('Something bad happened; please try again later.');
        })
      ).subscribe(function (datos) {
        callback(datos)
      });
  }

  Login(data, callback) {

    return this.http.post("http://localhost:3000/register", (data || {}), httpOptions)
      .pipe(
        catchError(this.handleError)
      ).subscribe(function (datos: token) {
        localStorage.setItem('token', datos.token)
        callback(datos)
      });
  }
  handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };


}
