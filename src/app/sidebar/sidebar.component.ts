import { Component, OnInit } from '@angular/core';
import {CheckboxModule} from 'primeng/primeng';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 myName='';
 myCity='bhilwara';
 myEmail: "";
  myphone:"";
  onSubmit(value : any){{ console.log(value);}}
  constructor() { }

  ngOnInit() {
  }

}
// export class CheckboxDemo {
//
//   selectedCities: string[] = [];
//
//   selectedCategories: string[] = ['Technology', 'Sports'];
//
//   checked: boolean = false;
// }

