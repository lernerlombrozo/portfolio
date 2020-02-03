import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public navBarService:NavBarService) { }

  ngOnInit() {
  }

  openNavBar(){
    this.navBarService.open();
  }

}
