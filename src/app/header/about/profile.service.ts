import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class Profileservice{
  constructor(private http :Http){
    this.getsongs();
  }

  private apiurl = 'http://prachi-music.herokuapp.com/albums';
  getsongs() {
    console.log('songscreated');
    return this.http.get(this.apiurl).map((res : Response) => res.json())
  }


}
