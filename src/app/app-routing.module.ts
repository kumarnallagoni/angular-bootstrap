import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InnerpageComponent } from './innerpage/innerpage.component';

export const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'innerpage', component: InnerpageComponent },
{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
    exports: [
        RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }
