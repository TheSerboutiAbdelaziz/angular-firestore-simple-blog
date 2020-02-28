import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {

  @ViewChild('post_img', {static: false}) post_img: ElementRef;
    flashMsg: any;

  constructor(private ps: PostService) { }

  ngOnInit() {
  }

  createPost(form: NgForm){
	let post_title = (<Post>form.value).post_title,
	    post_desc = (<Post>form.value).post_desc,
  	    post_img = (<HTMLInputElement>this.post_img.nativeElement).files[0];
  	    this.ps.createNewPost(post_title, post_desc, post_img).then(msg => {
            this.flashMsg = msg;
        });
  }

}
