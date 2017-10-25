import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class BlogsService {

  constructor(private http: Http, private router: Router, private authService: AuthService) { }
  getUsersBlog(userId) {
  return this.http.get('http://localhost:3000/blogs/user/' + userId).map(res => res.json())
      .map((blogs) => {
        if (blogs) {
         return blogs;
        }
      });
  }
  getSingleBlog(blog_id) {
   return this.http.get('http://localhost:3000/blogs/' + blog_id).map(res => res.json())
     .map((blog) => {
        return blog;
     });
  }
}
