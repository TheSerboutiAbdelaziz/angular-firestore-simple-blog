import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.service';
import { Contact } from '../../../core/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

   flashMsg: any;

  constructor(private cs: ContactService){}

  ngOnInit() {

  }

  createNewContact(form: NgForm){
    let data : Contact = form.value;
    this.cs.createNewContact(data.contact_username, data.contact_email, data.contact_message).then(msg => {
        this.flashMsg = msg;
    });
  }

}
