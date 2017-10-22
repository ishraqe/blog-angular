import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  open = false;
  constructor(private authService: AuthService, private  router: Router) { }

  ngOnInit() {
    console.log(this.authService.loggedIn);
  }
  openDropdown() {
    console.log('click');
    this.open = !this.open;
    console.log(this.open);
  }
  onClickLogout() {
    if (this.authService.logoutUser()) {
      this.router.navigate(['/login']);
    }
  }

}
