import { Component, OnInit, OnDestroy} from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
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
	  	}); 
	  }

	deletePost(post_id : string){
		this.ps.deletePost(post_id);
	}


	ngOnDestroy(){
		this.getAllPosts().unsubscribe();
	}

}
