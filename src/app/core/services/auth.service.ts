import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;
	userId: string = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) {
  	this.user = afAuth.user;
  }

	  register(user_email, user_password){
	  	return this.afAuth.auth.createUserWithEmailAndPassword(user_email, user_password);
	  }

	  login(user_email, user_password){
	  	return this.afAuth.auth.signInWithEmailAndPassword(user_email, user_password);
	  }

	  logout(){
	     return this.afAuth.auth.signOut()
	     	.then(() => {
	     		this.router.navigate(['/']);
	     	});
 	  }

}
