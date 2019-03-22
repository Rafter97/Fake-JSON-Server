import { Component, OnInit } from '@angular/core';
import { CarApiService} from '../../services/car-api.service';
import {Car} from '../car';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers: [CarApiService]
})
export class CarlistComponent implements OnInit {
  carsData: ICar[];
  constructor(private _carAPIService: CarApiService) { }


  ngOnInit() {
    this._carAPIService.getCarData().subscribe(carsData =>
      { this.carsData = carsData});
  }

  addCar(evt: ICar){
    this.carsData.push(evt);
    this.addTheCar(evt);
  }

  addTheCar(car:ICar):boolean{
    this._carAPIService.addCarData(car);
    return false;
  }
}
