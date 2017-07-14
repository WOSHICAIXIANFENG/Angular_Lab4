/**
 * Created by Samuel on 13/7/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MyHttpService {
  constructor(private http: Http) {}

  getUserInfo() {
    return this.http.get("http://jsonplaceholder.typicode.com/users/1");
  }

  getPostsInfoById(id: string) {
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=" + id);
  }
}
