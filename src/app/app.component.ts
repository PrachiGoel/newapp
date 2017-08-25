import {Component, Inject} from '@angular/core';
import { Http , Response } from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {MailService} from "./mail.service";
import {Profileservice} from './header/about/profile.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MailService,Profileservice]
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


  //////////////////songs form///////////

// songid='';
// songtitle='';
//  songartist='';
// release='';
//  genre='';
  ////////////////////////////////
  data : any = {};
  songs = {};
  // songlist:any = [];
  constructor(private mailservice : MailService,private songsservice : Profileservice){
    // this.loadsong();
  }

  loadsong(){

  this.songsservice.getsongs().subscribe(songs => {this.songs = songs;console.log(songs);});
// return this.songlist;
  }
    loadimage(){
 this.mailservice.getdata().subscribe(data => {this.data= data; console.log(this.data);});
  }
uploadsongs()
{
  this.songsservice.post_songs().subscribe();
}
  ngOnit(){}


}
