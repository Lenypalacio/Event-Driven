import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GallaryComponent } from './page/gallary/gallary.component';

import { PersonalComponent } from './page/personal/personal.component';
import { ContactComponent } from './page/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,

    GallaryComponent


    PersonalComponent

    ContactComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
