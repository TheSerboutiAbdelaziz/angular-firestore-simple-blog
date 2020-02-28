import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  displayErrorMessage: string = "";
  constructor(private as: AuthService,private us: UserService, private router: Router) { }

  ngOnInit() {
  }

  authRegister(form){
  	let data: User = form.value; 
  	 this.as.register(data.user_email, data.user_password)
  			.then(result => {
  				this.displayErrorMessage = "";
          this.us.addNewUser(result.user.uid, data.user_name, data.user_email, data.user_password)
              .then(() => {
                  this.router.navigate(['/dashboard'])
              })
              .catch(error => {
                this.displayErrorMessage = error.message;
              });
  			})
  			.catch(error => {
  				this.displayErrorMessage = error.message;
  			});
  }

}
