import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../../_service/auth.service';
import {BlogsService} from '../../../../_service/blogs.service';

@Component({
  selector: 'app-admin-create-blog',
  templateUrl: './admin-create-blog.component.html',
  styleUrls: ['../../../../../assets/css/blogs.css']
})
export class AdminCreateBlogComponent implements OnInit {
  @ViewChild('images_input') fileInput;
  constructor(private authService: AuthService, private blogService: BlogsService) { }

  ngOnInit () {
  }
  onSubmitCreateBlog(blogCreateForm: NgForm) {
    const editor = blogCreateForm.value.editorContent;
    const title = blogCreateForm.value.title;
    const category = blogCreateForm.value.category;
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('image', fileBrowser.files[0]);
      const image = fileBrowser.files[0];
      const user_id = this.authService.getAuthenticateduser();
      const blog_info = {
        'title': title,
        'blog_header_image': formData,
        'bog_description': editor,
        'categories': category,
        'user_id': user_id._id
      };

      console.log(blog_info);
      this.blogService.createBlog(blog_info).subscribe((res) => {
        if (res) {
          console.log(res);
        }else {
          console.log('err');
        }
      });
    }
  }


}
