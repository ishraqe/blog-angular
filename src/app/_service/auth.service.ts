import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  loggedIn = false;
  public token: string;
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
  getToken() {
    return localStorage.getItem('auth_token');
  }
  destroyToken() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  }
  setAuthenticatedUser(data) {
    localStorage.setItem('user', data);
  }
  getAuthenticateduser() {
    return JSON.parse(localStorage.getItem('user'));
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
          this.setAuthenticatedUser(JSON.stringify(res));
        }
        return true;
      });
  }
  logoutUser() {
    this.destroyToken();
    this.token = '';
    return true;
  }
}
