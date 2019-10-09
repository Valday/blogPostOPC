import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    // this.createNewPost(new Post('Mon premier post',
    //  'Utque proeliorum periti rectores primo catervas densas opponunt et fortes'));
   }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  updatePost(post: Post) {
    const postIndexToUpdate = this.posts.findIndex(
      (postUp) => {
        if (postUp === post) {
          return true;
        }
      }
    );

    this.posts[postIndexToUpdate] = post;
    this.savePosts();
    this.emitPosts();
  }
}
