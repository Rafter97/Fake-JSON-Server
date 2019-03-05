import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})

export class CarApiService {

  constructor(private _http:HttpClient){

  }
  

getCarData(): Observable<ICar[]>{
  return this._http.get<ICar>(this._siteURL)
  .do(data => console.log('All: '+ JSON.stringify(data]))
  .catach(this.handelError);
}

private handelError (err: HttpErrorResponse){
  console.log('OMDBAPISErvice: '+ err.m);


}
