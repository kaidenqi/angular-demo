import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[]; //Store the data from the backend API

  constructor(private service: PostService) {}

  //Read data using PostService
  ngOnInit() {
    this.service.getPosts()
    .subscribe((response) => {
      // console.log(response);
      this.posts = JSON.parse(JSON.stringify(response));
    });
  }

  //Create new post using PostService
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = ' ';

    this.service.createPost(post)
    .subscribe((response) => {
      //post['id']=JSON.parse(JSON.stringify(response)).id;
      //console.log(response);
      this.posts.splice(0, 0, post);
    });
  }

  //Delete post using PostService
  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      //console.log(response);
    });
  }
}
