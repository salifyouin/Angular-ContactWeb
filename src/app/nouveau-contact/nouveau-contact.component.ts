import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public  contactsService:ContactService) { }

  ngOnInit() {
  }
onSaveContact(dataForm){
this.contactsService.saveContact(dataForm)
  .subscribe(data=>{
console.log(data);
  },err=>{
    console.log(JSON.parse(err._body).message);
  })
}
}
