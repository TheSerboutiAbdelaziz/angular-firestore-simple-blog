import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

	getAllPosts(){
		return this.db.collection('/posts', ref => ref.orderBy('created_at','desc')).snapshotChanges();
	}

	getLatestPosts(){
		return this.db.collection('/posts', ref => ref.orderBy('created_at','desc').limit(3)).snapshotChanges();
	}

	getPost(post_id){
		return this.db.collection('/posts').doc(post_id).valueChanges();
	}

	createNewPost(post_title: string, post_desc: string, post_img: File){
		return new Promise((resolve,reject) => {
			let ref = this.storage.ref('posts/' + post_img.name);
			return ref.put(post_img).then(() => {
				ref.getDownloadURL().subscribe(post_img => {
					this.db.collection('/posts').add({
						post_title,
						post_desc,
						post_img,
						created_at: firebase.firestore.FieldValue.serverTimestamp(),
					}).then(() => resolve("Post created succesfully!"));	
				});
			});		
		});
	}

	deletePost(post_id){
		return this.db.collection('/posts').doc(post_id).delete();
	}

}
