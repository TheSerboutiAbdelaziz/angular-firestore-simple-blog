import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit, OnDestroy {

  post_id: string;	
  post: Post; 
  constructor(private ar: ActivatedRoute, private ps: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost():Subscription{
    this.post_id = this.ar.snapshot.paramMap.get('id');
    return this.ps.getPost(this.post_id).subscribe(post => {
        return this.post = post;
        });
  }



   ngOnDestroy() {
    this.getPost().unsubscribe();
  }

}
