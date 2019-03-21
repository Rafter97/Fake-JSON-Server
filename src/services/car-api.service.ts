import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'

@Injectable()
export class CarApiService {
  private _siteUrl = 'http://localhost:3000/car_data';

  carsDataCollection: AngularFirestoreCollection<ICar>

  allCarsData: ICar[];

  errorMessage: string;
  

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.carsDataCollection = _afs.collection<ICar>("cars_data");
  }

  getCarData(): Observable<ICar[]> {
    let carsData = this.carsDataCollection.valueChanges();
    return carsData;

  }

  addCarData(car: ICar) : void {
    this.carsDataCollection.add({...car});
  }

  addAllProducts(){
  this._http.get<ICar[]>(this._siteUrl).subscribe(
    carsData => {
      this.allCarsData = carsData;
      for (let car of this.allCarsData) {
        console.log("Adding make: " + car.make + "Model: " + car.model);
        this.carsDataCollection.add(car);
      }
    },
    error => (this.errorMessage = <any>error)
  );
}
}

