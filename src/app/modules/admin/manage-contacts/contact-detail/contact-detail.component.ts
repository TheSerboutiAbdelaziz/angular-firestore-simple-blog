import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../../../core/services/contact.service';
import { Contact } from '../../../../core/models/contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit, OnDestroy{
  contact_id: string;	
  contact: Contact; 
  constructor(private ar: ActivatedRoute, private cs: ContactService) { }

 ngOnInit() {
    this.getContact();
  }

  getContact():Subscription{
    this.contact_id = this.ar.snapshot.paramMap.get('id');
    return this.cs.getContact(this.contact_id).subscribe(data => {
        return this.contact = data;
        });
  }



   ngOnDestroy() {
    this.getContact().unsubscribe();
  }

}
