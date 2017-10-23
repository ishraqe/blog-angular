import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class BlogsService {

  constructor(private http: Http, private router: Router, private authService: AuthService) { }
  getUsersBlog(userId) {
    const data = {
      user_id: userId
    };
    return this.http.post('http://localhost:3000/users/login', data).map(res => res.json())
      .map((res) => {
        if (res) {
          return res;
        }else {
          return false;
        }
      });
  }
}
