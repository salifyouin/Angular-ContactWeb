import { Component, OnInit } from '@angular/core';
import {ContactsComponent} from "../contacts/contacts.component";
import {Contact} from "../../model/model.contact";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact=new Contact;
  mode:number=1;
  constructor(public contactsService:ContactService) { }

  ngOnInit() {
  }
  saveContact(){
    this.contactsService.saveContact(this.contact)
      .subscribe(data=>{
      this.contact=data;
      this.mode=2;
    },err=>{
      console.log(err);
    })
  }
}
