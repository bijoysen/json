import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

//import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';


import {AjaxService} from './services/ajax.service';

import { StarRatingModule } from 'angular-star-rating';
@NgModule({
  declarations: [
    //AppComponent,
    HomeComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    AjaxService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
