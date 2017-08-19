import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class Profileservice{
  constructor(private _http :Http){
    // this.getsongs();
  }

  private apiurl = 'http://prachi-music.herokuapp.com/albums';
  getsongs() {
    return this._http.get(this.apiurl).map((res : Response) => {res.json();})
  }

// saveProfile(){
//     let _url :string='https://reqres.in/api/users';
//     return this._http.post(_url,{name:'abcff',job:'progrmer',city:'mumbai'}).map((res:Response) => res.json());
// }
}
