import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

//import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';


import {AjaxService} from './services/ajax.service';

@NgModule({
  declarations: [
    //AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AjaxService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
