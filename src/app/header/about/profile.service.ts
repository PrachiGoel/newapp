import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class Profileservice{
  constructor(private http :Http){
    this.getsongs();
    this.post_songs()
  }

  private apiurl = 'http://prachi-music.herokuapp.com/albums';
  getsongs() {
    console.log('songscreated');
    return this.http.get(this.apiurl).map((res : Response) => res.json())
  }
  // songid='';
  // songtitle='';
  // songartist='';
  // release='';
  // genre='';
  // onSubmit(value: any) {
  //   {
  //     console.log(value);
  //   }
  // }
  post_songs()
  {

    const new_songs = {id:12,title:"Little Things", artist: "one direction", releaseYear: "1991", genre: "Rock"};
    console.log('songsposted');
    return this.http.post(this.apiurl,new_songs).map((res : Response) => res.json())
  }
}
