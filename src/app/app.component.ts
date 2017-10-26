import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// declare var jquery: any;
// declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  shownav= true;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
  }
}
