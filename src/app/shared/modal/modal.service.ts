import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  modalTextSubject = new Subject<string>();

  open(text:string){
    if(text.length>0){
      this.modalTextSubject.next(text);
    }
  }

  close(){
    this.modalTextSubject.next("");
  }
}
