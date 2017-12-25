import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppLoginModule } from '../container/app-login/app-login.module';
import { AppLayoutComponent } from '../container/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppLayoutComponent]
})
export class AppModule { }
