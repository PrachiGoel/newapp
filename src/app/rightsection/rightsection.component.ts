import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http'
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-rightsection',
  templateUrl: './rightsection.component.html',
  styleUrls: ['./rightsection.component.css']
})
export class RightsectionComponent implements OnInit {

  // private apiURL = 'https://pixabay.com/api/?key=6040467-517445ababf8d2fb4cdc9f409&q=usa&pretty=true';
  // data : any = {};
  // constructor(private http : Http)
  // {
  //    console.log("heallo");
  //    this.getdata();
  //    this.getimages()
  // }
  // getdata(){
  //   return this.http.get(this.apiURL)
  //   .map((res : Response) => res.json())
  // }
  // getimages(){
  //   this.getdata().subscribe(data => {
  //     console.log(data);
  //   })
  // }
  ngOnInit() {
  }

}
