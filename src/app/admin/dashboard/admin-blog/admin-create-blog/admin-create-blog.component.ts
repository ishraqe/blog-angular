import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-admin-create-blog',
  templateUrl: './admin-create-blog.component.html',
  styleUrls: ['./admin-create-blog.component.css']
})
export class AdminCreateBlogComponent implements OnInit {
  form: any = {
    editorContent: '',
  }
  // public options: Object = {
  //     charCounterCount: true,
  //     fontFamilySelection: true,
  //     fontSize: ['8', '10', '12', '14', '18', '30', '60', '96'],
  //     toolbarButtons: ['bold', 'Image', 'italic', 'underline', 'paragraphFormat', 'alert'],
  //     fontFamily: {
  //       'Arial,Helvetica,sans-serif': 'Font 1',
  //       'Impact,Charcoal,sans-serif': 'Font 2',
  //       'Tahoma,Geneva,sans-serif': 'Font 3'
  //     },
  //     toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat',  'alert'],
  //     toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
  //     toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert']
  // };
  constructor() { }

  ngOnInit () {
    $(function() {
      console.log('ok');
      $('#editorpen').froalaEditor({
        // Set custom buttons with separator between them.
        toolbarButtons: [ 'redo' , '|',
          'bold', 'italic', 'underline', 'strikeThrough',
          'subscript', 'superscript', 'outdent', 'indent',
          'clearFormatting', 'insertTable', 'html'],
        toolbarButtonsXS: [ 'redo' , '-', 'bold', 'italic', 'underline']
      });
    });
  }
  onSubmitCreateBlog(blogCreateForm: NgForm) {
    const editor = blogCreateForm.value.editorContent;
    console.log(editor);
  }

}
