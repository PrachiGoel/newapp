import {Component, Inject} from '@angular/core';
import { Http , Response } from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myarr = [44,33,2,4,66,221];
 day = new Date (1994,2,12);
  obj ={
    id:'1',
    name:'fff'
  };
  arr = ['ddd', 'ffffffffffff', 'ffdftgr'];
  isTrue= '2 == 2';
  myNAme = 'weru';
  onclick(event,value){
    console.log(value);
    console.log(event);

  }
  items = ['angular 2' , ' react ', 'javascript' ];
  newitems =  "";
  pushitems = function () {
    if (this.newitems != ""){
   this.items.push(this.newitems);
   this.newitems = "";
    }
  };
  remove = function(index){
    this.items.splice(index, 1);
  };
  // constructor( private mail:MailService){
  //
  // }
  // constructor( @Inject('mail') private mail )
  // {}
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
      .map((res : Response) => res.json()).subscribe(data => {
        this.data = data;
        console.log(data);
      });
  }
  // getimages(){
  //   this.getdata().subscribe(data => {
  //     this.data = data;
  //     console.log(data);
  //   });
  // }
}
