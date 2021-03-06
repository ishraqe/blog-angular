import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {RouterClass} from './routes/routes';
import { BlogsComponent } from './home/blogs/blogs.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './_service/auth.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {AuthGuard} from './_guards/auth.guard';
import { AdminBlogComponent } from './admin/dashboard/admin-blog/admin-blog.component';
import { MainPageComponent } from './admin/dashboard/main-page/main-page.component';
import {BlogsService} from './_service/blogs.service';
import { AdminCreateBlogComponent } from './admin/dashboard/admin-blog/admin-create-blog/admin-create-blog.component';

const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
  uploadMultiple: false,
  maxFiles: 1
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogsComponent,
    AdminComponent,
    SignInComponent,
    DashboardComponent,
    AdminBlogComponent,
    MainPageComponent,
    AdminCreateBlogComponent
  ],
  imports: [
    BrowserModule, RouterClass, FormsModule,
    HttpModule, NgxPaginationModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    DropzoneModule.forRoot(DROPZONE_CONFIG)
  ],
  providers: [AuthService, AuthGuard, BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
