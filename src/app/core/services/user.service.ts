import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) {}

  addNewUser(user_id, user_name, user_email, user_password){
  	return this.db.doc('users/'+ user_id).set({
  		user_name, 
  		user_email,
  		user_password
  	});
  }
}
