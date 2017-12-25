import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './app-home.component';
import { AppHomeRoutingModule } from './app-home.routing';

@NgModule({
  imports: [
    CommonModule,
    AppHomeRoutingModule
  ],
  declarations: [ AppHomeComponent ]
})
export class AppHomeModule { }
