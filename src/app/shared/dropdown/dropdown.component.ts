import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() text:string;
  @Input() options:{name:string,iconClass:string}[];
  @Input() iconClass:string;
  @Input() selected:boolean;
  
  constructor() { }

  ngOnInit() {
    console.log(this.selected)
  }

  select(index){
    // must emmit index
    console.log(index);
  }

}
