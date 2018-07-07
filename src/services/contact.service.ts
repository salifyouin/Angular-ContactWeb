import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Contact} from "../model/model.contact";

@Injectable()
export class ContactService{
constructor(public http:Http){

}
getcontacts(motCle:string,page:number,size:number){
  return this.http.get("http://localhost:8282/chercherContact?mc="
    +motCle+"&size="+size+"&page="+page)
    .map(resp=>resp.json());
}

  getcontact(id:number){
    return this.http.get("http://localhost:8282/contacts/"+id)
      .map(resp=>resp.json());

  }
  saveContact(contact:Contact){
    return this.http.post("http://localhost:8282/contacts",contact)
      .map(resp=>resp.json());
  }

  updateContact(contact:Contact){
    return this.http.put("http://localhost:8282/contacts/"+contact.id,contact)
      .map(resp=>resp.json());
  }

  deleteContact(id:number){
    return this.http.delete("http://localhost:8282/contacts/"+id)
      .map(resp=>resp.json());
  }
}
