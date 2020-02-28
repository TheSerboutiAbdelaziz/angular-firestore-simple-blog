import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db: AngularFirestore) { }

	getAllContacts(){
	  return this.db.collection('/contacts', ref => ref.orderBy('created_at','desc')).snapshotChanges();
	}

	getContact(contact_id){
		return this.db.collection('/contacts').doc(contact_id).valueChanges();
	}

	createNewContact(contact_username: string, contact_email: string, contact_message: string){
		return new Promise((resolve,reject) => {
			return this.db.collection('/contacts').add({
				contact_username,
				contact_email,
				contact_message,
				created_at: firebase.firestore.FieldValue.serverTimestamp(),
			}).then(() => resolve("your message is sent successfully!"));
		});
	}

    deleteContact(contact_id){
		return this.db.collection('/contacts').doc(contact_id).delete();
	}
}
