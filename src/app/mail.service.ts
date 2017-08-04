import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {
  private apiURL = 'https://pixabay.com/api/?key=6040467-517445ababf8d2fb4cdc9f409&pretty=true&q=' ;
  data : any = {};
  myimage = "";
  constructor(private http : Http)
  {
    console.log("heallo");
    this.getdata();
    // this.getimages();

  }
  getdata(){
    return this.http.get(this.apiURL + this.myimage)
      .map((res : Response) => res.json()
      // ).subscribe(data => {
      //   this.data = data;
      //   console.log(data);
      );
  }
}
