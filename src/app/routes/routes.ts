import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AdminComponent} from '../admin/admin.component';
import {DashboardComponent} from '../admin/dashboard/dashboard.component';
import {AuthGuard} from '../_guards/auth.guard';
import {AdminBlogComponent} from '../admin/dashboard/admin-blog/admin-blog.component';
import {AdminCreateBlogComponent} from '../admin/dashboard/admin-blog/admin-create-blog/admin-create-blog.component';
import {MainPageComponent} from '../admin/dashboard/main-page/main-page.component';



const appRouter: Routes = [
  {path: '', component: HomeComponent},
  /* Admin ROutes
   */
  {path: 'login', component: AdminComponent},
  {path: 'admin/dashboard', canActivate: [AuthGuard], component: DashboardComponent, children: [
    {path: '', component: MainPageComponent},
    {path: 'blogs', component: AdminBlogComponent},
    {path: 'blogs/create', component: AdminCreateBlogComponent}
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})


export class RouterClass { }
