import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppHomeComponent } from './app-home.component';

const appHomeRoutes: Routes = [
  {
    path: '',
    component: AppHomeComponent
  }
];

export const AppHomeRoutingModule: ModuleWithProviders = RouterModule.forChild(appHomeRoutes);






