import {Component, OnChanges, OnInit, HostListener, Inject,} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {AuthService} from '../../_service/auth.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  open = false;
  constructor(@Inject(DOCUMENT) private document: Document, private authService: AuthService, private  router: Router) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    $(window).scroll(function() {
      const wintop = $(window).scrollTop(),
        docheight = $('article').height(),
        winheight = $(window).height();
      const totalScroll = (wintop / (docheight - winheight)) * 100;
      $('.KW_progressBar').css('width', totalScroll + '%');
    });
  }
  openDropdown() {
    console.log('click');
    this.open = !this.open;
  }
  onClickLogout() {
    if (this.authService.logoutUser()) {
      this.router.navigate(['/login']);
    }
  }
}
