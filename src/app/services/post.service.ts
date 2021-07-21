import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  //Read data from the backend API using HTTP Get method
  getPosts() {
    return this.http.get(this.url);
  }

  //Create new posts using HTTP Post method
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  //Delete data from posts using HTTP Delete method
  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
