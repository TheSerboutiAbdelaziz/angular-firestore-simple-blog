import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ListContactsComponent } from './manage-contacts/list-contacts/list-contacts.component';
import { ContactDetailComponent } from './manage-contacts/contact-detail/contact-detail.component';

import { ListPostsComponent } from './manage-posts/list-posts/list-posts.component';
import { AddPostComponent } from './manage-posts/add-post/add-post.component';

import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent , children: [
	    { path: '', redirectTo: 'manage-posts', pathMatch: 'full' },
		{ path: 'manage-posts', component: ListPostsComponent},
		{ path: 'add-post', component: AddPostComponent },
		{ path: 'manage-contacts', component: ListContactsComponent },
		{ path: 'manage-contacts/:id', component: ContactDetailComponent }
		], canActivate: [AuthGuard]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
