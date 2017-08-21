import { Component, OnInit } from '@angular/core';
import {Profileservice} from './profile.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[Profileservice]
})
export class AboutComponent implements OnInit {
  // songs:any = {};
  // public profileObj:any= {name:'',job:'',city:'',id:''};
  //  constructor(private songsservice : Profileservice) { }

  // loadsong(){
  //
  //   return this.songsservice.getsongs().subscribe(songs => {this.songs = songs;console.log(songs);});
  //
  // }
  ngOnInit() {

}
// public saveUserProfile()
// {
//
// }

}
