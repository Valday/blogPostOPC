import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    console.log(this.postItem);
  }

  // Action bouton loveIts
  onLoveIts() {
    this.postItem.loveIts++;
    this.postsService.updatePost(this.postItem);
  }

  // Action bouton don't loveIts
  onDontLoveIts() {
    this.postItem.loveIts--;
    this.postsService.updatePost(this.postItem);
  }

  // Action bouton supprimer
  onDeleteItem() {
    this.postsService.removePost(this.postItem);
  }

}
