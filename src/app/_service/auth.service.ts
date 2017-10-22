import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  loggedIn = false;
  authUser: any = {};
  constructor(private http: Http, private router: Router) { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }
  setToken(token) {
    localStorage.setItem('token', token);
  }
  destroyToken() {
    localStorage.removeItem('token');
  }
  setAuthenticatedUser(data) {
    this.authUser = data;
  }
  getAuthenticateduser() {
    return this.authUser;
  }
  logInUser(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };
    return this.http.post('http://localhost:3000/users/login', data).map(res => res.json())
      .map((res) => {
        if (res) {
          localStorage.setItem('auth_token', res.tokens[0].token);
          this.loggedIn = true;
        }
        return true;
      });
  }
}
