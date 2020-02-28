import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  getar(){
  	let currentRoute = this.router.url;
  }

  getCurrentPageName(){
  	let currentRoute = this.router.url;
  	let dashboard = "manage";
  	if (currentRoute.indexOf(dashboard) !== -1 ) {
  		let convertRouteToArr = currentRoute.split("/"); 
  		let getCurrentRoute = convertRouteToArr[2].split("-").join(" "); 
  		return getCurrentRoute;
  	}
  }


}
