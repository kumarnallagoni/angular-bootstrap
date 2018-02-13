import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InnerpageComponent } from './innerpage/innerpage.component';
/*import { TopNavComponent } from './dashboard/top-nav/top-nav.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';*/


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InnerpageComponent,
    /*TopNavComponent,
    FooterComponent,
    SideNavComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
