import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../_service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error = '';
  constructor(private  authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  OnSignIn(siginForm: NgForm) {
    const email = siginForm.value.email;
    const password = siginForm.value.password;
    this.authService.logInUser(email, password).subscribe((result) => {
      if (result === true) {
        this.router.navigate(['/admin/dashboard']);
      }else {
        this.error = 'auth failed';
      }
    });
  }
}
