import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import {CheckboxModule} from 'primeng/primeng';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //
  // myName = '';
  // myCity = 'bhilwara';
  // myEmail: "";
  // myphone: "";

  // onSubmit(value: any) {
  //   {
  //     console.log(value);
  //   }
  // }

  reactiveForm = new FormGroup({
    name: new FormControl('prachi', Validators.required),
    email: new FormControl('abc@gg.kk'),
    address: new FormGroup({
      street: new FormControl('baker'),
      phone: new FormControl('9999990099'),
      city: new FormControl('london')

    })

  });
  onSubmit(){console.log(this.reactiveForm.value);}


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

