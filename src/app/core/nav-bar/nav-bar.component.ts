import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NavBarService } from './nav-bar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  @ViewChild("mySidebar", {static: false}) mySidebar: ElementRef;
  @ViewChild("myOverlay", {static: false}) myOverlay: ElementRef;

  public openedSub : Subscription;

  constructor(public navBarService:NavBarService) { }

  ngOnInit() {
    this.openedSub = this.navBarService.sideNavOpenedSubject.subscribe(toggled=>{
      console.log('toggled: ', toggled);
      if(toggled){
        this.mySidebar.nativeElement.style.display = "block";
        this.myOverlay.nativeElement.style.display = "block";
      }  else {
        this.mySidebar.nativeElement.style.display = "none";
        this.myOverlay.nativeElement.style.display = "none";
      }
    })
  }

  closeNavBar(){
    this.navBarService.close();
  }

  openNavBar(){
    this.navBarService.open();
  }

  ngOnDestroy(){
    this.openedSub.unsubscribe();
  }

}
