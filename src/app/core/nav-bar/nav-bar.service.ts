import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor() { }

  sideNavOpenedSubject = new Subject<Boolean>();

  open(){
    this.sideNavOpenedSubject.next(true);
  }

  close(){
    this.sideNavOpenedSubject.next(false);
  }
}
