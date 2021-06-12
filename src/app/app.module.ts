import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './Components/work/work.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    ContactMeComponent,
    AboutMeComponent,
    ProfileComponent,
    NavBarComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
