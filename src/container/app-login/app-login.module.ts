import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './app-login.component';
import { AppLoginRoutingModule } from './app-login.routing';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { loginReducer } from '../../store/login/login.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    AppLoginRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forFeature('logindata', loginReducer),
  ],
  declarations: [ AppLoginComponent ]
})
export class AppLoginModule { }
