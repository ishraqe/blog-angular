import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shownav: false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route);
  }
}
