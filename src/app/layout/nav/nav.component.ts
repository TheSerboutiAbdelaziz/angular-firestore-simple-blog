import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  isUser: boolean = false;
  constructor(private as: AuthService) { }

  ngOnInit() {
    this.login();
  }

  login(){
    this.as.user.subscribe(user => {
        if (user){
          this.isUser = true;
          this.as.userId = user.uid;
        }else{
          this.isUser = false;
          this.as.userId = '';
        }
    });    
  }

  logout() {
    return this.as.logout();
  }

}
