import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'posts', component: PostsListComponent },
	{ path: 'posts/:id', component: PostDetailComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
