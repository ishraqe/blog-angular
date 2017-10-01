import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AdminComponent} from '../admin/admin.component';

const appRouter: Routes = [
  {path: '', component: HomeComponent},
  /* Admin ROutes
   */
  {path: 'admin/login', component: AdminComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})


export class RouterClass { }
