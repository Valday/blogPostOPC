import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  // @Input() postsArray: Post[];
  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}