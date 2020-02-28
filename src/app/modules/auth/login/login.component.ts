import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../../core/services/auth.service';
import { Auth } from '../../../core/models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  displayErrorMessage: string = "";

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form){
  	let data: Auth = form.value;
  	this.as.login(data.email, data.password)
  		.then(() => {
  			this.displayErrorMessage = "";
  			this.router.navigate(['/dashboard/manage-posts']);
  		})
  		.catch(error => {
  			  this.displayErrorMessage = "Login failed. Please, try again";
  		});
  }

}
