import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN_SUBMIT } from '../../store/login/login.action';
import { RootState } from '../../store/index';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../store/login/login.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  userName: string;
  password: any;
  userDetails$: Observable<any>;
  constructor(public store: Store<RootState>, public service: LoginService) { }

  ngOnInit() {
  }
  login() {
    this.store.dispatch({
      type: LOGIN_SUBMIT,
      payload: { 'username': this.userName, 'password': this.password }
    });

    this.userDetails$ = this.store.select('details');
  }
}
