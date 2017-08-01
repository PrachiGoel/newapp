import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http'
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-rightsection',
  templateUrl: './rightsection.component.html',
  styleUrls: ['./rightsection.component.css']
})
export class RightsectionComponent  {

  dta : any = {};
  cityName = "";
  constructor( private http : Http) {
    console.log("hi prachi");
    this.searchcity();
  }
  searchcity() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b9b371e12434fcbdb01ea895bd5950cc&q=' + this.cityName).map((res: Response) => res.json()).subscribe(dta => {
      this.dta = dta;
      console.log(dta);
    })};


}






















// this.http.get('' + this.city).map((res: Response) => res.json()).subscribe({data => {this.data = data;console.log(data);}})
