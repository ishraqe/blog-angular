import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';

@Injectable()
export class AdminService {
  constructor(private http: Http) { }
}
