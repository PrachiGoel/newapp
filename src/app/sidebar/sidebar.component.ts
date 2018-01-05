import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import {CheckboxModule} from 'primeng/primeng';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('parentCount')
  // parentCount :number;
  count:number;

  @Output()

    change : EventEmitter<number> = new EventEmitter<number>();
  updateCount(){
    this.count++;
    this.change.emit(this.count);
  }
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
    email: new FormControl('abc@gg.kk',Validators.required),
    address: new FormGroup({
      street: new FormControl('baker',Validators.required),
      phone: new FormControl('9999990099',Validators.required),
      city: new FormControl('london',Validators.required)

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

