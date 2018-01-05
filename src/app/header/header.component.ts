import { Component,Input,Output,OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()

  message :string = "prachi Goel";
  @Output()
  messagevent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
sendmessage(){
    this.messagevent.emit(this.message)
}
}
