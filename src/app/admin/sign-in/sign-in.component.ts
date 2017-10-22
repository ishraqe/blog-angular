import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private  authService: AuthService) { }

  ngOnInit() {
  }
  OnSignIn(siginForm: NgForm) {
    const email = siginForm.value.email;
    const password = siginForm.value.password;
    this.authService.logInUser(email, password);
  }
}
