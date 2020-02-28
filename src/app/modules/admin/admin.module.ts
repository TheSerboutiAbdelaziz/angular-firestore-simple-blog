import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ListPostsComponent } from './manage-posts/list-posts/list-posts.component';
import { AddPostComponent } from './manage-posts/add-post/add-post.component';

import { ListContactsComponent } from './manage-contacts/list-contacts/list-contacts.component';
import { ContactDetailComponent } from './manage-contacts/contact-detail/contact-detail.component';


@NgModule({
  declarations: [
  	DashboardComponent, 
  	ListPostsComponent, 
  	AddPostComponent, 
  	ListContactsComponent, 
  	ContactDetailComponent
  	],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
