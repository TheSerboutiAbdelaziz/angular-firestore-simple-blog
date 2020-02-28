import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../core/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private ps: PostService) { }

  posts : Post[] = [];
  ngOnInit() {
  	this.getLatestPosts();
  }

    getLatestPosts():Subscription{
      return this.ps.getLatestPosts().subscribe(data => {
        this.posts = data.map(action => {
          return {
            post_id: action.payload.doc.id,
            ...action.payload.doc.data()
          }   
        });
      }); 
    }

  ngOnDestroy(){
    this.getLatestPosts().unsubscribe();
  }
}
