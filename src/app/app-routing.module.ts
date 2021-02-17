import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: './components/home/home.module#HomeModule',

  },

  {
    path: 'not-authorized',
    component: LayoutComponent,
    loadChildren: './components/not-authorized/not-authorized.module#NotAuthorizedModule',

  },


  {
    path: 'hr/job',
    component: LayoutComponent,
    loadChildren: './components/hr/job/job.module#JobModule',
    // canActivate: [AuthGuard], canActivateChild: [AuthGuard]
  },
  {
    path: 'login',
    //component: LayoutComponent,
    loadChildren: './components/user/login/login.module#LoginModule'
  }
  ,
 

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  // ,
  // {
  //   path: '**',
  //   loadChildren: './components/shared/not-found/not-found.module#NotFoundModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
