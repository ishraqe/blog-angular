import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_service/auth.service';
import {Http} from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  auth = <any>{};
  index =  1;
  blogs = [];
  message = '';
  p: Number = 1;
  openModal = false;
  blogImage: String = '';
  constructor(private authService: AuthService, private http: Http) { }

  ngOnInit() {
    this.auth = this.authService.getAuthenticateduser();
    this.getMyBlogs(this.auth._id);
  }
  getMyBlogs(user_id) {
     const id = user_id.toString();
      this.http.get('http://localhost:3000/blogs/user/' + id).map(res => res.json())
        .subscribe((res) => {
          if (res) {
            this.blogs = res;
            console.log(res);
          }else {
            this.message = 'No blog found';
          }
      });
  }
  getSingleBlog(blog_id) {
    const id = blog_id.toString();
    this.http.get('http://localhost:3000/blogs/' + id).map(res => res.json())
      .subscribe((res) => {
        if (res) {
          this.blogImage = res.blog_header_image;
        }else {
          this.message = 'No blog found';
        }
      });
  }
  openImageModal(blog_id) {
    this.openModal = true;
    this.getSingleBlog(blog_id);
    console.log(blog_id);
  }
  closeImageModal() {
    this.openModal = false;
  }
// /blogs/user/:id
}
