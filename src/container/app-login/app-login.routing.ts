import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppLoginComponent } from './app-login.component';

const appLoginRoute: Routes = [
  {
    path: '',
    component: AppLoginComponent
  }
];

export const AppLoginRoutingModule: ModuleWithProviders = RouterModule.forChild(appLoginRoute);