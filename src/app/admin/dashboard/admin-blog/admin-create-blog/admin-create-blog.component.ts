import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-create-blog',
  templateUrl: './admin-create-blog.component.html',
  styleUrls: ['./admin-create-blog.component.css']
})
export class AdminCreateBlogComponent implements OnInit {
  form: any = {
    editorContent: '',
  }
  config: {}
  constructor() { }

  ngOnInit () {
  }
  onSubmitCreateBlog(blogCreateForm: NgForm) {
    const editor = blogCreateForm.value.editorContent;
    const image = blogCreateForm.value.image;
    const title = blogCreateForm.value.title;
    const category = blogCreateForm.value.category;
    console.log(editor, image, title, category);
  }
  onUploadError(error) {
    console.log(error);
  }
  onUploadSuccess(file) {
    console.log(file[0].name);
  }

}
