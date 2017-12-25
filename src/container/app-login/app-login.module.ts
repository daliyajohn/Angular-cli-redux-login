import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './app-login.component';
import { AppLoginRoutingModule } from './app-login.routing';

@NgModule({
  imports: [
    CommonModule,
    AppLoginRoutingModule
  ],
  declarations: [ AppLoginComponent ]
})
export class AppLoginModule { }
