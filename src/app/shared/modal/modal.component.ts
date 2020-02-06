import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild("myModal", {static: false}) myModal: ElementRef;

  public openedSub : Subscription;

  title="Modal Header";
  message="";
  constructor(public modalService:ModalService) { }

  ngOnInit() {
    this.openedSub = this.modalService.modalTextSubject.subscribe(text=>{
      console.log('toggled: ', text);
      if(text.length>0){
        this.message = text;
        this.myModal.nativeElement.style.display = "block";
      }  else {
        this.message = "";
        this.myModal.nativeElement.style.display = "none";
      }
    })
  }

  closeModal(){
    this.modalService.close();
  }

  openModal(text:string){
    this.modalService.open(text);
  }

  ngOnDestroy(){
    this.openedSub.unsubscribe();
  }

}
