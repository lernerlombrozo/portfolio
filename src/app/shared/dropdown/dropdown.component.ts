import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() text:string;
  @Input() options:string[];
  @Input() iconClass:string;
  @Input() selected:boolean;
  
  constructor() { }

  ngOnInit() {
    console.log(this.selected)
  }

}
