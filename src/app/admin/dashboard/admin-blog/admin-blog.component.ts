import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_service/auth.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  auth = <any>{};
  blogs = {};
  message = '';
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
// /blogs/user/:id
}
