import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  logInUser(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };

    this.http.post('http://localhost:3000/users/login', data)
     .subscribe(
      (rs) => {
        console.log(rs);
      }
    );
    // this.http.post('localhost:3000/users/login', data)
    //   .subscribe(
    //     (res) => {
    //       console.log(data);
    //     }
    //   );
  }
}
