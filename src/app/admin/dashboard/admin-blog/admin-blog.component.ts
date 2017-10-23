import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_service/auth.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.getAuthenticateduser());
  }
}
