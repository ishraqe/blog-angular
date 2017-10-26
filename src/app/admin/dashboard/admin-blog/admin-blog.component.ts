import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_service/auth.service';
import {Http} from '@angular/http';
import {BlogsService} from '../../../_service/blogs.service';
import * as swal from 'sweetalert';

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
  openImgModal = false;
  openEditBlogModal= false;
  blogImage: String = '';
  constructor(private authService: AuthService, private blogService: BlogsService, private http: Http) { }

  ngOnInit() {
    this.auth = this.authService.getAuthenticateduser();
    this.getMyBlogs(this.auth._id);
  }
  getMyBlogs(user_id) {
     const id = user_id.toString();
     this.blogService.getUsersBlog(id).subscribe((res) => {
       if (res) {
         this.blogs = res;
       }else {
         this.message = 'No blog found';
       }
     });
  }
  getSingleBlog(blog_id) {
    const id = blog_id.toString();
    this.blogService.getSingleBlog(id).subscribe((res) => {
      if (res) {
        this.blogImage = res.blog_header_image;
      }else {
        this.message = 'No blog found';
      }
    });
  }
  openImageModal(blog_id) {
    this.openImgModal = true;
    this.getSingleBlog(blog_id);
  }
  openEditModal() {
    console.log('open edit');
    this.openEditBlogModal = true;
  }
  closeEditModal () {
    this.openEditBlogModal = false;
  }
  editBlog(blog_id) {

  }
  deleteBlog(blog_id) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
          console.log(blog_id);
          swal('Poof! Your imaginary file has been deleted!', {
            icon: 'success',
          });
        } else {
          swal('Your imaginary file is safe!');
        }
      });
  }
  closeImageModal() {
    this.openImgModal = false;
  }
// /blogs/user/:id
}
