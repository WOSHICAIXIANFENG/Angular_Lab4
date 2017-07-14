import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// use ReactiveFormsModule Only when using Data Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven.component';

import {HttpModule} from '@angular/http';

import { PostComponent} from './user-post.component';

// Import our Routes file
import { MyRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    PostComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MyRoutes
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
