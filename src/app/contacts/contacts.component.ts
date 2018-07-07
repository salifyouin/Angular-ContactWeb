import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactService} from "../../services/contact.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";
@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motcle:string="";
 curentPage:number=0;
 size:number=5;
  pages:any;
  constructor(public http:Http,public contactservice:ContactService,
              public router:Router) {

  }

  ngOnInit() {

  }
  doSearch(){
    this.contactservice.getcontacts(this.motcle,this.curentPage,this.size)
      .subscribe(data=>{
        this.pages=new Array(data.totalPages);
        this.pageContacts=data;
      },err =>{
        console.log(err);
      } )
  }
chercher(){
this.doSearch();
}

gotoPage(i:number){
this.curentPage=i;
this.doSearch();
}

  onEditContact(id:number){
    this.router.navigate(['editContact',id]);
}

  onDeleteContact(c:Contact){
    let confirm=window.confirm('Etes vous sur de vouloir supprimer');
    if (confirm==true){
      this.contactservice.deleteContact(c.id)
        .subscribe(data=>{
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c),1
          );
        },err=>{
          console.log(err);
        })
    }

  }
}
