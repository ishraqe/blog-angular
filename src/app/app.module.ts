import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {RouterClass} from './routes/routes';
import { BlogsComponent } from './home/blogs/blogs.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogsComponent,
    AdminComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule, RouterClass,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
