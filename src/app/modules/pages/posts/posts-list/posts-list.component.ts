import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})
export class PostsListComponent implements OnInit, OnDestroy {

  posts : Post[] = [];
  constructor(private ps: PostService) { }

  ngOnInit() {
  	this.getAllPosts();
  }

  getAllPosts():Subscription{
  	return this.ps.getAllPosts().subscribe(data => {
  		this.posts = data.map(action => {
  			return {
  				post_id: action.payload.doc.id,
  				...action.payload.doc.data()
  			}
  		});	
  	}
  	);
  }


  ngOnDestroy() {
  	this.getAllPosts().unsubscribe();
  }

}
