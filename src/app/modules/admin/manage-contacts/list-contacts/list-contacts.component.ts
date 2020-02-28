import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../../../core/services/contact.service';
import { Contact } from '../../../../core/models/contact';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html'
})
export class ListContactsComponent implements OnInit, OnDestroy{
  contacts: Contact[] = [];
  constructor(private cs: ContactService) { }

    ngOnInit() {
      this.getAllContacts();
    }
    getAllContacts():Subscription{
      return this.cs.getAllContacts().subscribe(data => {
        this.contacts = data.map(action => {
          return {
            contact_id: action.payload.doc.id,
            ...action.payload.doc.data()
          }   
        });
      }); 
    }

  deleteContact(contact_id : string){
    this.cs.deleteContact(contact_id);
  }

  ngOnDestroy(){
    this.getAllContacts().unsubscribe();
  }



}
