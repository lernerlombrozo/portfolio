import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../shared/modal/modal.service';

import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public http:HttpClient, public modalService:ModalService) { 
  }

  ngOnInit() {
  }

  model={
    name:"",
    email:"",
    message:""
  }

  onSubmit(){
    console.log("submiting", this.model)
    this.http.post<{message:string}>(`${environment.serverURL}/api/mail`,this.model).subscribe(
      (res)=>{
        this.modalService.open(res.message)
      },
      (err)=>{
        this.modalService.open(err.message)
        console.log(err)
      }
      )
  }

}
