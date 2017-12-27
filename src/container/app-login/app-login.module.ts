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
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../../store/login/login.effect';
import { LoginService } from '../../store/login/login.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    AppLoginRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpModule,
    StoreModule.forFeature('logindata', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [ AppLoginComponent ],
  providers: [ LoginService ]
})
export class AppLoginModule { }
