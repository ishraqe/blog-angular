import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  loggedIn = false;
  public token: string;
  authUser = {};
  constructor(private http: Http, private router: Router) { }
  isAuthenticated() {
    const currentUser = localStorage.getItem('auth_token');
    this.token = currentUser;
    if (this.token != null) {
      return true;
    }
  }
  setToken(token) {
    localStorage.setItem('auth_token', token);
  }
  destroyToken() {
    localStorage.removeItem('auth_token');
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
          this.setToken(res.tokens[0].token);
          this.loggedIn = true;
          this.setAuthenticatedUser(res);
        }
        return true;
      });
  }
  logoutUser() {
    this.destroyToken();
    this.token = '';
    this.authUser = '';
    return true;
  }
}
