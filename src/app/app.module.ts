import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppLoginModule } from '../container/app-login/app-login.module';
import { AppLayoutComponent } from '../container/app-layout/app-layout.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    AppLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
