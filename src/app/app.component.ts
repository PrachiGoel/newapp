import {Component, Inject} from '@angular/core';
import { Http , Response } from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MailService]
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
  data : any = {};
  constructor(private mailservice : MailService){ }
    loadimage(){
 this.mailservice.getdata().subscribe(data => {this.data= data; console.log(data);});
  }
  ngOnit(){}

    // constructor( private mail:MailService){
  //
  // }
  // constructor( @Inject('mail') private mail )
  // {}



  // getimages(){
  //   this.getdata().subscribe(data => {
  //     this.data = data;
  //     console.log(data);
  //   });
  // }
}
